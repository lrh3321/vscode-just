import * as execa from 'execa';

let justExe: string = 'just';

export function getJustExecutable(): string {
    return justExe;
}

export function setJustExecutable(just: string) {
    justExe = just;
}

export async function execJust(args?: string[], options?: execa.Options) {
    return await execa(justExe, args, options);
}
