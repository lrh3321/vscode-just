import { CancellationToken, ProcessExecution, ProviderResult, ShellExecution, Task, TaskDefinition, TaskProvider, TaskScope, workspace } from "vscode";
import { getRecipes } from "../just";

interface JustTaskDefinition extends TaskDefinition {
    /**
     * The recipe name
     */
    recipe: string;

    /**
     * The justfile containing the recipe
     */
    justfile?: string;

    workingDirectory?: string;

    variables?: JustParameters;
    args?: string[];
    kwargs?: JustParameters;
    starParameter?: string[];

    /**
     * Invoke <SHELL> to run recipes
     */
    shell?: string;

    /**
     * Invoke shell with <SHELL-ARG> as an argument
     */
    shellArgs?: string[];
}

interface JustParameters {
    [s: string]: string;
}

export class JustTaskProvider implements TaskProvider {
    private tasks: Task[] | undefined;
    private justfile: string | undefined;

    constructor(private workspaceRoot: string) { }

    provideTasks(token: CancellationToken): ProviderResult<Task[]> {
        try {
            return this.getTasks();
        } catch (e) {
            console.error('provideTasks:', e);
            return [];
        }
    }

    resolveTask(task: Task, token: CancellationToken): ProviderResult<Task> | undefined {
        if (task.definition.type === 'just') {
            try {
                const _task = this.getTask(task.definition as JustTaskDefinition, task);
                return _task;
            } catch (error) {
                console.error('resolveTask:', error);
            }
        }

        return undefined;
    }

    async getTasks(): Promise<Task[]> {
        if (this.tasks !== undefined) {
            return this.tasks;
        }

        const result = await getRecipes(this.justfile, this.workspaceRoot);
        if (result.kind === 'ok') {
            this.tasks = result.recipes.map((r) => {
                const definition: JustTaskDefinition = {
                    recipe: r.name,
                    type: 'just',
                };
                return this.getTask(definition);
            });
        }
        return this.tasks;
    }

    getTask(definition: JustTaskDefinition, source?: Task): Task {
        const args: string[] = [];

        if (definition.variables) {
            Object.entries<string>(definition.variables).forEach(kv => {
                if (typeof kv[1] === 'string') {
                    args.push('--set', kv[0], kv[1]);
                }
            });
        }

        if (definition.justfile) {
            args.push('--justfile', definition.justfile);
        }

        if (definition.workingDirectory) {
            args.push('--working-directory', definition.workingDirectory);
        }

        args.push(definition.recipe);

        if (definition.shell) {
            args.push("--shell", definition.shell);
        }

        if (definition.shellArgs && definition.shellArgs.length > 0) {
            // TODO:
        }

        if (definition.args) {
            definition.args.forEach(arg => args.push(arg));
        }

        if (definition.kwargs) {
            Object.entries<string | string[]>(definition.kwargs).forEach(kv => {
                if (typeof kv[1] === 'string') {
                    args.push(kv.join('='));
                }
            });
        }

        if (definition.starParameter) {
            definition.starParameter.forEach(arg => args.push(arg));
        }

        const justExe = workspace.getConfiguration("just").get('justExecutable', 'just');
        return new Task(
            definition,
            source ? source.scope : TaskScope.Workspace,
            definition.recipe,
            'just',
            new ProcessExecution(justExe, args, { cwd: this.workspaceRoot }),
        );
    }
}