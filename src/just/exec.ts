import { spawn, } from 'child_process';

let justExe: string = 'just';

export function getJustExecutable(): string {
    return justExe;
}

export function setJustExecutable(just: string) {
    justExe = just;
}

export interface execOptions {
    /**
    Current working directory of the child process.

    @default process.cwd()
    */
    readonly cwd?: string;

    /**
    Environment key-value pairs. Extends automatically from `process.env`. Set `extendEnv` to `false` if you don't want this.

    @default process.env
    */
    readonly env?: NodeJS.ProcessEnv;

    /**
    On Windows, do not create a new console window. Please note this also prevents `CTRL-C` [from working](https://github.com/nodejs/node/issues/29837) on Windows.

    @default true
    */
    readonly windowsHide?: boolean;
}

export class execResult {
    constructor(
        public command: string,
        public args: string[] | undefined,
        public exitCode: number,
        public stdout?: string,
        public stderr?: string,
    ) { }
}

export async function execJust(args?: string[], options?: execOptions): Promise<execResult> {
    const child = spawn(justExe, args, options);
    if (child.pid === undefined) {

        const err = await new Promise<JustExecError>((resolve, reject) => {
            child.on('error', (e) => {
                resolve(new JustExecError(e.message, 'no-just'));
            });

        });
        throw err;
    }

    let stdout = '';
    let stderr = '';
    for await (const chunk of child.stdout) {
        stdout += chunk;
    }

    for await (const chunk of child.stderr) {
        stderr += chunk;
    }

    const exitCode = await new Promise<number>((resolve, reject) => {

        child.on('error', (e) => {
            reject(e);
        });
        child.on('close', (code) => {
            if (code === 1) {
                if (stderr.includes('Failed to read justfile')) {
                    reject(new JustExecError(stderr, 'no-just-file'));
                } else if (stderr.includes('No justfile found')) {
                    reject(new JustExecError(stderr, 'no-just-file'));
                } else if (stderr.includes('Multiple candidate justfiles found')) {
                    reject(new JustExecError(stderr, 'multiple-candidate'));
                } else if (stderr.includes('Justfile does not contain recipe')) {
                    reject(new JustExecError(stderr, 'no-recipes'));
                } else if (stderr.includes('error: Expected ')) {
                    reject(new JustExecError(stderr, 'just-parse-error'));
                }
                return;
            }
            resolve(code);
        });

    });

    return new execResult(justExe, args, exitCode, stdout, stderr);
}

//  'no-just-file'  | 'just-parse-error' | 'unknown'
export type JustErrorKind = 'no-recipes' | 'no-just-file' | 'no-just' | 'just-parse-error' | 'multiple-candidate';

export class JustExecError extends Error {

    constructor(message?: string,
        public kind?: JustErrorKind,
        public stdout?: string,
        public stderr?: string,
    ) {
        super(message);
    }
}

// const justFileFormatError = new JustExecError('', );
