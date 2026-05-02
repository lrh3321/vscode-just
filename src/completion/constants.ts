// https://just.systems/man/en/constants.html

// 1.41.0

interface justConstants {
    name: string;
    value: string;
    valueOnWindows?: string;
}

export const constants: justConstants[] = [
    { "name": "HEX", value: "0123456789abcdef" },
    { "name": "HEXLOWER", value: "0123456789abcdef" },
    { "name": "HEXUPPER", value: "0123456789ABCDEF" },
    { "name": "PATH_SEP", value: "/", valueOnWindows: '\\' },
    { "name": "PATH_VAR_SEP", value: ":", valueOnWindows: ";" },
    { "name": "CLEAR", value: "\\ec" },
    { "name": "NORMAL", value: "\\e[0m" },
    { "name": "BOLD", value: "\\e[1m" },
    { "name": "ITALIC", value: "\\e[3m" },
    { "name": "UNDERLINE", value: "\\e[4m" },
    { "name": "INVERT", value: "\\e[7m" },
    { "name": "HIDE", value: "\\e[8m" },
    { "name": "STRIKETHROUGH", value: "\\e[9m" },
    { "name": "BLACK", value: "\\e[30m" },
    { "name": "RED", value: "\\e[31m" },
    { "name": "GREEN", value: "\\e[32m" },
    { "name": "YELLOW", value: "\\e[33m" },
    { "name": "BLUE", value: "\\e[34m" },
    { "name": "MAGENTA", value: "\\e[35m" },
    { "name": "CYAN", value: "\\e[36m" },
    { "name": "WHITE", value: "\\e[37m" },
    { "name": "BG_BLACK", value: "\\e[40m" },
    { "name": "BG_RED", value: "\\e[41m" },
    { "name": "BG_GREEN", value: "\\e[42m" },
    { "name": "BG_YELLOW", value: "\\e[43m" },
    { "name": "BG_BLUE", value: "\\e[44m" },
    { "name": "BG_MAGENTA", value: "\\e[45m" },
    { "name": "BG_CYAN", value: "\\e[46m" },
    { "name": "BG_WHITE", value: "\\e[47m" },
];