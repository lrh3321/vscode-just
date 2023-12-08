export interface JustDump {
    aliases: Aliases;
    assignments: Assignments;
    first: string;
    recipes: Recipes;
    settings: Settings;
    warnings: any[];
}

export interface Aliases {
    pack: Pack;
}

export interface Pack {
    attributes: any[];
    name: string;
    target: string;
}

export interface Assignments {
    [s: string]: Assignment;
}

export interface Assignment {
    export: boolean;
    name: string;
    value: string | string[];
}

export interface Recipes {
    [s: string]: RecipeDump;
}

export interface RecipeDump {
    attributes: any[];
    body: Array<Array<Array<string[]> | string>>;
    dependencies: any[];
    doc: string;
    name: string;
    parameters: Parameter[];
    priors: number;
    private: boolean;
    quiet: boolean;
    shebang: boolean;
}

export interface Parameter {
    default: null | string;
    export: boolean;
    kind: 'singular' | 'star' | 'plus';
    name: string;
}

export interface Settings {
    allow_duplicate_recipes: boolean;
    dotenv_load: null;
    export: boolean;
    fallback: boolean;
    ignore_comments: boolean;
    positional_arguments: boolean;
    shell: null;
    tempdir: null;
    windows_powershell: boolean;
    windows_shell: WindowsShell;
}

export interface WindowsShell {
    arguments: string[];
    command: string;
}
