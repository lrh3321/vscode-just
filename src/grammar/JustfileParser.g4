parser grammar JustfileParser;

options {
    tokenVocab = JustfileLexer;
}


justfile      : item* EOF
;

item          : aliasStatement eol?
              | assignment eol?
              | exportStatement eol?
              | importStatement eol?
              | moduleStatement eol?
              | settingStatement eol?
              | recipe
              | eol
;

eol           : NEWLINE
              | COMMENT
;

postComment: COMMENT;

itemDocumentation      : COMMENT+
;

importStatement        : itemDocumentation? importKeyword '?'? stringValue?
;

aliasStatement         : itemDocumentation? aliasKeyword recipeName ':=' originRecipeName
;

originRecipeName: NAME;

setKeyword   : Set;
aliasKeyword : Alias;
importKeyword: Import;
exportKeyword: Export;
modKeyword   : Mod;

assignment             : variableName ':=' expression
;

variableName: NAME
;

exportStatement        : itemDocumentation? exportKeyword assignment
;

settingStatement       : itemDocumentation? setKeyword 
                       (
                           booleanSettingNames boolean?
                         | stringSettingNames ':=' stringValue
                         | stringSeqSettingNames stringSlice
                       )
;

booleanSettingNames: AllowDuplicateRecipesSetting
                     | AllowDuplicateVariablesSetting
                     | DotenvLoadSetting
                     | DotenvRequiredSetting
                     | FallbackSetting
                     | IgnoreCommentsSetting
                     | PositionalArgumentsSetting
                     | QuietSetting
                     | WindowsPowershellSetting
                     | Export
                     | NAME
;

stringSettingNames: DotenvFilenameSetting
                   | DotenvPathSetting
                   | TempdirSetting
                   | NAME
;

stringSeqSettingNames: ShellSetting
                      | WindowsShellSetting
                      | NAME
;

moduleStatement  : itemDocumentation? modKeyword '?'? NAME stringValue?
;

boolean       : ':=' booleanValues
;

booleanValues : True | False;

stringSlice   : ':=' '[' stringValue (',' stringValue)* ','? ']'
;

expression    : If condition conditionBlock (Else If condition conditionBlock )* Else conditionBlock
              | INDENT* value? '/' expression
              | INDENT* value? '+' expression
              | INDENT* value eol?
;

condition     : expression (EqualsEquals | EqualsTilde | NotEquals) expression
;

conditionBlock: '{' eol? expression '}'
;

functionLeft  : NAME LeftParen
              | 'shell' LeftParen
;

functionRight :  RightParen
;

functionValue : functionLeft sequence? functionRight
;

value         : functionValue
              | BACKTICK
              | INDENTED_BACKTICK
              | NAME
              | stringValue
              | LeftParen expression RightParen
;


sequence      : expression ',' sequence
              | expression ','?
;

recipe        : itemDocumentation? attributes* '@'? recipeName parameter* variadic? Colon dependency* (LogicalAND dependency+)? eol body?
;

recipeName    : NAME
;

attributes    : '[' attribute* ']' eol
;

attribute     : NAME ( LeftParen stringValue RightParen )?
;

parameterName : '$'? NAME;

parameter     : parameterName
              | parameterName '=' value
;

variadicModifier : Star
                 | Plus
;

variadic      : variadicModifier parameter
;

dependency    : recipeName
              | LeftParen recipeName expression* RightParen
;

body          : rawBlocks
              | commandBlocks
;

rawBlocks     : INDENT SheBangLine (INDENT Line | NEWLINE)+
;

commandBlocks : (INDENT Line | NEWLINE)+
;

// body          : INDENT SheBangLine? Line? DEDENT
// ;

// line          : LINE LINE_PREFIX? (TEXT | interpolation)+ NEWLINE
//               | NEWLINE
// ;

interpolation : '{{' expression '}}'
;

stringValue        : STRING
                   | INDENTED_STRING
                   | RAW_STRING
                   | INDENTED_RAW_STRING
;
