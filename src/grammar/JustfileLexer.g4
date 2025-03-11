lexer grammar JustfileLexer;

options
{
    superClass = JustfileLexerBase;
}


// Keywords

Set :    'set';
Alias :  'alias';
Import : 'import';
Export : 'export';
Mod :    'mod';

// Boolean
True:               'true';
False:              'false';

// Conditions
If :               'if';
Else :             'else';
EqualsEquals:      '==';
EqualsTilde:       '=~';
NotEquals:         '!=';

// Operators
SheBang:            '#!';
Assign:             ':=';
LogicalAND:         '&&';
Star:               '*';
Plus:               '+';
Sharp:              '#';
Colon:              ':';
// SemiColon:          ';';
// Dot:                '.';
Comm:               ',';
LeftBracket :       '[';
RightBracket:       ']';
DoubleLeftBrace:    '{{';
DoubleRightBrace:   '}}';
LeftBrace:          '{';
RightBrace:         '}';
LeftParen:          '(';
RightParen:         ')';
At:                 '@';
Divide:             '/';
Slash:              '\\';
Dollar:             '$';
Equal:              '=';
Question:           '?';

fragment TriQuote:           '"""';
fragment TriSingleQuote:     '\'\'\'';

fragment Quote:           '"';
fragment SingleQuote:     '\'';


// Settings
AllowDuplicateRecipesSetting:    'allow-duplicate-recipes';
AllowDuplicateVariablesSetting:  'allow-duplicate-variables';
DotenvLoadSetting:               'dotenv-load';
FallbackSetting:                 'fallback';
IgnoreCommentsSetting:           'ignore-comments';
PositionalArgumentsSetting:      'positional-arguments';
QuietSetting:                    'quiet';
WindowsPowershellSetting:        'windows-powershell';

DotenvFilenameSetting:   'dotenv-filename';
DotenvPathSetting:       'dotenv-path';
DotenvRequiredSetting:   'dotenv-required';
TempdirSetting:          'tempdir';
ShellSetting:            'shell';
WindowsShellSetting:     'windows-shell';


COMMENT             : Sharp .*? NEWLINE
;

INDENTED_BACKTICK   : '```' .*? '```'
;

BACKTICK            : // {this.notIndentedString()}? 
                      '`' ~[`]* '`'
;

// DEDENT              = emitted when indentation decreases
// EOF                 = emitted at the end of the file
INDENT              :
                      {this.column == 0 && this.braceDepth == 0}?
                      (' ' | '\t')+ // emitted when indentation increases
;

// LINE                = emitted before a recipe line
NAME                : [a-zA-Z_][a-zA-Z0-9_-]*
;
NEWLINE             : '\r'? '\n'
;

INDENTED_RAW_STRING : TriSingleQuote LONG_STRING_ITEM*? TriSingleQuote
;

INDENTED_STRING     : TriQuote LONG_STRING_ITEM*? TriQuote // # also processes \n \r \t \" \\ escapes
;

RAW_STRING          : // {this.notIndentedString()}? 
                      '\'' ('\\' (RN | .) | ~[\\'])*? '\''
;

STRING              : // {this.notIndentedString()}?
                      '"' ('\\' (RN | .) | ~[\\"])*? '"'
;

fragment LONG_STRING_ITEM: ~'\\' | '\\' (RN | .);

fragment RN: '\r'? '\n';

fragment EscapeSequence
    : '\\' [btnfr"'\\]
    | '\\' ([0-3]? [0-7])? [0-7]
    | '\\' 'u'+ HexDigit HexDigit HexDigit HexDigit
    ;

fragment HexDigit
    : [0-9a-fA-F]
    ;

LINE_PREFIX         : '@-' | '-@' | At | '-'
;
// TEXT                = recipe text, only matches in a recipe body


//空白字符，抛弃
WS:         [ \t]+ -> skip;

mode RecipeContent;

SheBangLine:         SheBang ~[\r\n]*? NEWLINE;
Line       :         (~[\r\n]*? Slash NEWLINE)* ~[\r\n]*? NEWLINE;
