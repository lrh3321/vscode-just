
// https://just.systems/man/en/functions.html

interface justFunction {
    name: string
    minArgc?: number
    maxArgc?: number

    detail?: string
    documentation?: string
}

export const functions: justFunction[] = [
    // System Information
    {
        name: "arch",
        detail: "Instruction set architecture.",
        documentation: `Possible values are: "aarch64", "arm", "asmjs", "hexagon", "mips", "msp430", "powerpc", "powerpc64", "s390x", "sparc", "wasm32", "x86", "x86_64", and "xcore".`,
    },
    {
        name: "num_cpus",
        detail: "Number of logical CPUs.",
    },
    {
        name: "os",
        detail: "Operating system.",
        documentation: `Possible values are: "android", "bitrig", "dragonfly", "emscripten", "freebsd", "haiku", "ios", "linux", "macos", "netbsd", "openbsd", "solaris", and "windows".`,
    },
    {
        name: "os_family",
        detail: "Operating system family;",
        documentation: `Possible values are: "unix" and "windows".`,
    },
    // External Commands
    {
        name: "shell",
        detail: "returns the standard output of shell script command with zero or more positional arguments args.",
        documentation: `The shell used to interpret command is the same shell that is used to evaluate recipe lines, and can be changed with set shell := […].`,
    },
    // Environment Variables
    {
        name: "env_var",
        detail: "Retrieves the environment variable with name key, aborting if it is not present.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "env_var_or_default",
        detail: "Retrieves the environment variable with name key, returning default if it is not present.",
        minArgc: 2,
        maxArgc: 2,
    },
    {
        name: "env",
        detail: "Alias for env_var(key) or env_var_or_default(key, default).",
        minArgc: 1,
        maxArgc: 2,
    },
    // Invocation Directory
    {
        name: "invocation_directory",
        detail: "Retrieves the absolute path to the current directory when just was invoked, before just changed it (chdir’d) prior to executing commands.",
        documentation: `On Windows, invocation_directory() uses cygpath to convert the invocation directory to a Cygwin-compatible /-separated path. Use invocation_directory_native() to return the verbatim invocation directory on all platforms.`,
    },
    {
        name: "invocation_directory_native",
        detail: "Retrieves the absolute path to the current directory when just was invoked, before just changed it (chdir’d) prior to executing commands.",
    },
    // Justfile and Justfile Directory
    {
        name: "justfile",
        detail: "Retrieves the path of the current justfile.",
    },
    {
        name: "justfile_directory",
        detail: "Retrieves the path of the parent directory of the current justfile.",
    },
    // Source and Source Directory 
    {
        name: "source_file",
        detail: "Retrieves the path of the current source file.",
    },
    {
        name: "source_directory",
        detail: "Retrieves the path of the parent directory of the current source file.",
    },
    // Just Executable
    {
        name: "just_executable",
        detail: "Absolute path to the just executable.",
    },
    // Just Process ID
    {
        name: "just_pid",
        detail: "Process ID of the just executable.",
    },
    // String Manipulation 
    {
        name: "append",
        detail: "Append suffix to whitespace-separated strings in s.",
        documentation: `append('/src', 'foo bar baz') → 'foo/src bar/src baz/src'`,
        minArgc: 2,
        maxArgc: 2,
    },
    {
        name: "prepend",
        detail: "Prepend prefix to whitespace-separated strings in s.",
        documentation: `prepend('src/', 'foo bar baz') → 'src/foo src/bar src/baz'`,
        minArgc: 2,
        maxArgc: 2,
    },
    {
        name: "encode_uri_component",
        detail: "Percent-encode characters in s except [A-Za-z0-9_.!~*'()-], matching the behavior of the JavaScript encodeURIComponent function.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "quote",
        detail: "Replace all single quotes with ''' and prepend and append single quotes to s.",
        documentation: `This is sufficient to escape special characters for many shells, including most Bourne shell descendants.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "replace",
        detail: "Replace all occurrences of from in s to to.",
        minArgc: 3,
        maxArgc: 3,
    },
    {
        name: "replace_regex",
        detail: "Replace all occurrences of regex in s to replacement.",
        documentation: `Regular expressions are provided by the Rust regex crate. See the syntax documentation for usage examples. Capture groups are supported. The replacement string uses Replacement string syntax.`,
        minArgc: 3,
        maxArgc: 3,
    },
    {
        name: "trim",
        detail: "Remove leading and trailing whitespace from s.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "trim_end",
        detail: "Remove trailing whitespace from s.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "trim_end_match",
        detail: "Remove suffix of s matching pat.",
        minArgc: 2,
        maxArgc: 2,
    },
    {
        name: "trim_end_matches",
        detail: "Repeatedly remove suffixes of s matching pat.",
        minArgc: 2,
        maxArgc: 2,
    },
    {
        name: "trim_start",
        detail: "Remove leading whitespace from s.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "trim_start_match",
        detail: "Remove prefix of s matching pat.",
        minArgc: 2,
        maxArgc: 2,
    },
    {
        name: "trim_start_matches",
        detail: "Repeatedly remove prefixes of s matching pat.",
        minArgc: 2,
        maxArgc: 2,
    },
    // Case Conversion
    {
        name: "capitalize",
        detail: "Convert first character of s to uppercase and the rest to lowercase.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "kebabcase",
        detail: "Convert s to kebab-case.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "lowercamelcase",
        detail: "Convert s to lowerCamelCase.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "lowercase",
        detail: "Convert s to lowercase.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "shoutykebabcase",
        detail: "Convert s to SHOUTY-KEBAB-CASE.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "shoutysnakecase",
        detail: "Convert s to SHOUTY_SNAKE_CASE.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "snakecase",
        detail: "Convert s to snake_case.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "titlecase",
        detail: "Convert s to Title Case.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "uppercamelcase",
        detail: "Convert s to UpperCamelCase.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "uppercase",
        detail: "Convert s to uppercase.",
        minArgc: 1,
        maxArgc: 1,
    },

    // Path Manipulation
    // Fallible
    {
        name: "absolute_path",
        detail: "Absolute path to relative path in the working directory.",
        documentation: `absolute_path("./bar.txt") in directory /foo is /foo/bar.txt.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "canonicalize",
        detail: "Canonicalize path by resolving symlinks and removing ., .., and extra /s where possible.",
        // detail: `parent_directory("/foo/bar.txt") is /foo.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "extension",
        detail: "Extension of path.",
        documentation: `extension("/foo/bar.txt") is txt.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "file_name",
        detail: "File name of path with any leading directory components removed.",
        documentation: `file_name("/foo/bar.txt") is bar.txt.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "file_stem",
        detail: "File name of path without extension.",
        documentation: `file_stem("/foo/bar.txt") is bar.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "parent_directory",
        detail: "Parent directory of path.",
        documentation: `parent_directory("/foo/bar.txt") is /foo.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "without_extension",
        detail: "path without extension.",
        documentation: `without_extension("/foo/bar.txt") is /foo/bar. These functions can fail, for example if a path does not have an extension, which will halt execution.`,
        minArgc: 1,
        maxArgc: 1,
    },
    // Infallible
    {
        name: "clean",
        detail: "Simplify path by removing extra path separators, intermediate . components, and .. where possible.",
        documentation: `clean("foo//bar") is foo/bar, clean("foo/..") is ., clean("foo/./bar") is foo/bar.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "join",
        detail: "This function uses / on Unix and \\ on Windows, which can be lead to unwanted behavior.",
        documentation: `The / operator, e.g., a / b, which always uses /, should be considered as a replacement unless \\ are specifically desired on Windows. Join path a with path b. join("foo/bar", "baz") is foo/bar/baz. Accepts two or more arguments.`,
        minArgc: 1,
    },

    // Filesystem Access
    {
        name: "path_exists",
        detail: "Returns true if the path points at an existing entity and false otherwise.",
        documentation: `Traverses symbolic links, and returns false if the path is inaccessible or points to a broken symlink.`,
        minArgc: 1,
        maxArgc: 1,
    },
    // Error Reporting
    {
        name: "error",
        detail: "Abort execution and report error message to user.",
        minArgc: 1,
        maxArgc: 1,
    },
    // UUID and Hash Generation
    {
        name: "blake3",
        detail: "Return BLAKE3 hash of string as hexadecimal string.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "blake3_file",
        detail: "Return BLAKE3 hash of file at path as hexadecimal string.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "sha256",
        detail: "Return the SHA-256 hash of string as hexadecimal string.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "sha256_file",
        detail: "Return SHA-256 hash of file at path as hexadecimal string.",
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "uuid",
        detail: "Generate a random version 4 UUID.",

    },
    // Random
    {
        name: "choose",
        detail: "Generate a string of n randomly selected characters from alphabet, which may not contain repeated characters.",
        documentation: `For example, choose('64', HEX) will generate a random 64-character lowercase hex string.`,
        minArgc: 2,
        maxArgc: 2,
    },
    // Datetime
    {
        name: "datetime",
        detail: "Return local time with format.",
        documentation: `The arguments to datetime and datetime_utc are strftime-style format strings, see the [chrono library docs](https://docs.rs/chrono/latest/chrono/format/strftime/index.html) for details.`,
        minArgc: 1,
        maxArgc: 1,
    },
    {
        name: "datetime_utc",
        detail: "Return UTC time with format.",
        documentation: `The arguments to datetime and datetime_utc are strftime-style format strings, see the [chrono library docs](https://docs.rs/chrono/latest/chrono/format/strftime/index.html) for details.`,
        minArgc: 1,
        maxArgc: 1,
    },
    // Semantic Versions
    {
        name: "semver_matches",
        detail: "Check whether a semantic version",
        documentation: `e.g., "0.1.0" matches a requirement, e.g., ">=0.1.0", returning "true" if so and "false" otherwise.`,
        minArgc: 2,
        maxArgc: 2,
    },
    // XDG Directories
    // These functions return paths to user-specific directories for things like configuration, data, caches, executables, and the user’s home directory. These functions follow the XDG Base Directory Specification, and are implemented with the dirs crate.
    {
        name: "cache_directory",
        detail: "The user-specific cache directory.",
    },
    {
        name: "config_directory",
        detail: "The user-specific configuration directory.",
    },
    {
        name: "config_local_directory",
        detail: "The local user-specific configuration directory.",
    },
    {
        name: "data_directory",
        detail: "The user-specific data directory.",
    },
    {
        name: "data_local_directory",
        detail: "The local user-specific data directory.",
    },
    {
        name: "executable_directory",
        detail: "The user-specific executable directory.",
    },
    {
        name: "home_directory",
        detail: "The user’s home directory.",
    },
    // Style
    {
        name: "style",
        detail: "Return a named terminal display attribute escape sequence used by just. Unlike terminal display attribute escape sequence constants, which contain standard colors and styles, style(name) returns an escape sequence used by just itself, and can be used to make recipe output match just’s own output.",
        minArgc: 1,
        maxArgc: 1,
    },
];
