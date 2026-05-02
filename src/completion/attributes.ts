
// https://just.systems/man/en/attributes.html
// 1.46.0

interface AttributeData {
    name: string
    detail: string
    insertText?: string
}

export const attributes: AttributeData[] = [
    {
        name: "argh",
        detail: "Print help string HELP for ARG in usage messages.",
        insertText: "arg('${1:ARG}', help='${2:HELP}')"
    },
    {
        name: "argl",
        detail: "Require values of argument ARG to be passed as --LONG option.",
        insertText: "arg('${1:ARG}', long='${2:LONG}')"
    },
    {
        name: "argp",
        detail: "Require values of argument ARG to match regular expression PATTERN.",
        insertText: "arg('${1:ARG}', pattern='${2:PATTERN}')"
    },
    {
        name: "args",
        detail: "Require values of argument ARG to be passed as short -S option.",
        insertText: "arg('${1:ARG}', short='${2:S}')"
    },
    {
        name: "argv",
        detail: "Makes option ARG a flag which does not take a value.",
        insertText: "arg('${1:ARG}', value='${2:VALUE}')"
    },
    {
        name: "confirm",
        detail: "Require confirmation prior to executing recipe."
    },
    {
        name: "confirmp",
        detail: "Require confirmation prior to executing recipe with a custom prompt.",
        insertText: "confirm('${1:PROMPT}')"
    },
    {
        name: "default",
        detail: "Use recipe as module’s default recipe.",
    },
    {
        name: "doc",
        detail: "Set recipe’s documentation comment to DOC.",
        insertText: "doc('${1:DOC}')"
    },
    {
        name: "dragonfly",
        detail: "Enable recipe on DragonFly BSD.",
    },
    {
        name: "env",
        detail: "Set environment variables for recipe.",
        insertText: "env('${1:ENV_VAR}', '${2:VALUE}')"
    },
    {
        name: "extension",
        detail: "Set shebang recipe script’s file extension to EXT. EXT should include a period if one is desired.",
        insertText: "extension('${1:EXT}')"
    },
    {
        name: "exit-message",
        detail: "Print error message if recipe fails regardless of set no-exit-message.",
    },
    {
        name: "freebsd",
        detail: "Enable recipe on FreeBSD.",
    },
    {
        name: "group",
        detail: "Put recipe in recipe group NAME.",
        insertText: "group('${1:NAME}')"
    },
    {
        name: "android",
        detail: "Enable recipe on Android.",
    },
    {
        name: "linux",
        detail: "Enable recipe on Linux."
    },
    {
        name: "macos",
        detail: "Enable recipe on MacOS."
    },
    {
        name: "no-cd",
        detail: "Don’t change directory before executing recipe."
    },
    {
        name: "no-exit-message",
        detail: "Don’t print an error message if recipe fails."
    },
    {
        name: "no-quiet",
        detail: "Override globally quiet recipes and always echo out the recipe."
    },
    {
        name: "openbsd",
        detail: "Enable recipe on OpenBSD."
    },
    {
        name: "parallel",
        detail: "Run this recipe’s dependencies in parallel."
    },
    {
        name: "positional-arguments",
        detail: "Turn on positional arguments for this recipe."
    },
    {
        name: "private",
        detail: "Omitted from just --list."
    },
    {
        name: "script",
        detail: "Execute recipe as script. See script recipes for more details.",
    },
    {
        name: "scriptc",
        detail: "Execute recipe as a script interpreted by COMMAND. See script recipes for more details.",
        insertText: "script('${1:sh -eu}')"
    },
    {
        name: "unix",
        detail: "Enable recipe on Unixes. (Includes MacOS)."
    },
    {
        name: "windows",
        detail: "Enable recipe on Windows."
    },
    {
        name: "working-directory",
        detail: "Set recipe working directory. PATH may be relative or absolute. If relative, it is interpreted relative to the default working directory.",
        insertText: "working-directory('${1:PATH}')"
    },
];