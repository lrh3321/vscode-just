
// https://just.systems/man/en/settings.html

interface SettingData {
    name: string
    detail: string
}

export const booleanSettings: SettingData[] = [
    { name: 'allow-duplicate-recipes', detail: 'Allow recipes appearing later in a justfile to override earlier recipes with the same name.' },
    { name: 'allow-duplicate-variables', detail: 'Allow variables appearing later in a justfile to override earlier variables with the same name.' },
    { name: 'dotenv-load', detail: '' },
    { name: 'dotenv-required', detail: 'Error if a .env file isn’t found.' },
    { name: 'export', detail: 'Export all variables as environment variables.' },
    { name: 'fallback', detail: 'Search justfile in parent directory if the first recipe on the command line is not found.' },
    { name: 'ignore-comments', detail: 'Ignore recipe lines beginning with #.' },
    { name: 'positional-arguments', detail: 'Pass positional arguments.' },
    { name: 'unstable', detail: 'Enable unstable features.' },
    { name: 'windows-powershell', detail: 'Use PowerShell on Windows as default shell. (Deprecated. Use windows-shell instead.' },
];
/*
allow-duplicate-recipes	boolean	false	Allow recipes appearing later in a justfile to override earlier recipes with the same name.
allow-duplicate-variables	boolean	false	Allow variables appearing later in a justfile to override earlier variables with the same name.
dotenv-filename	string	-	Load a .env file with a custom name, if present.
dotenv-load	boolean	false	Load a .env file, if present.
dotenv-path	string	-	Load a .env file from a custom path and error if not present. Overrides dotenv-filename.
dotenv-required	boolean	false	Error if a .env file isn’t found.
 
*/
export const stringSettings: SettingData[] = [
    { name: 'dotenv-filename', detail: 'Load a .env file with a custom name, if present.' },
    { name: 'dotenv-path', detail: 'Load a .env file from a custom path and error if not present. Overrides dotenv-filename.' },
    { name: 'tempdir', detail: 'Create temporary directories in tempdir instead of the system default temporary directory.' },
    { name: 'working-directory', detail: 'Set the working directory for recipes and backticks, relative to the default working directory.' },
];

export const stringArraySettings: SettingData[] = [
    { name: 'script-interpreter', detail: 'Set command used to invoke recipes with empty [script] attribute.' },
    { name: 'shell', detail: 'Set the command used to invoke recipes and evaluate backticks.' },
    { name: 'windows-shell', detail: 'Set the command used to invoke recipes and evaluate backticks.' },
];

export const booleanSettingNames: string[] = booleanSettings.map(s => s.name);
