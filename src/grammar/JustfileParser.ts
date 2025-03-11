// Generated from JustfileParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JustfileParserListener from "./JustfileParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class JustfileParser extends Parser {
	public static readonly Set = 1;
	public static readonly Alias = 2;
	public static readonly Import = 3;
	public static readonly Export = 4;
	public static readonly Mod = 5;
	public static readonly True = 6;
	public static readonly False = 7;
	public static readonly If = 8;
	public static readonly Else = 9;
	public static readonly EqualsEquals = 10;
	public static readonly EqualsTilde = 11;
	public static readonly NotEquals = 12;
	public static readonly SheBang = 13;
	public static readonly Assign = 14;
	public static readonly LogicalAND = 15;
	public static readonly Star = 16;
	public static readonly Plus = 17;
	public static readonly Sharp = 18;
	public static readonly Colon = 19;
	public static readonly Comm = 20;
	public static readonly LeftBracket = 21;
	public static readonly RightBracket = 22;
	public static readonly DoubleLeftBrace = 23;
	public static readonly DoubleRightBrace = 24;
	public static readonly LeftBrace = 25;
	public static readonly RightBrace = 26;
	public static readonly LeftParen = 27;
	public static readonly RightParen = 28;
	public static readonly At = 29;
	public static readonly Divide = 30;
	public static readonly Slash = 31;
	public static readonly Dollar = 32;
	public static readonly Equal = 33;
	public static readonly Question = 34;
	public static readonly AllowDuplicateRecipesSetting = 35;
	public static readonly AllowDuplicateVariablesSetting = 36;
	public static readonly DotenvLoadSetting = 37;
	public static readonly FallbackSetting = 38;
	public static readonly IgnoreCommentsSetting = 39;
	public static readonly PositionalArgumentsSetting = 40;
	public static readonly QuietSetting = 41;
	public static readonly WindowsPowershellSetting = 42;
	public static readonly DotenvFilenameSetting = 43;
	public static readonly DotenvPathSetting = 44;
	public static readonly DotenvRequiredSetting = 45;
	public static readonly TempdirSetting = 46;
	public static readonly ShellSetting = 47;
	public static readonly WindowsShellSetting = 48;
	public static readonly COMMENT = 49;
	public static readonly INDENTED_BACKTICK = 50;
	public static readonly BACKTICK = 51;
	public static readonly INDENT = 52;
	public static readonly NAME = 53;
	public static readonly NEWLINE = 54;
	public static readonly INDENTED_RAW_STRING = 55;
	public static readonly INDENTED_STRING = 56;
	public static readonly RAW_STRING = 57;
	public static readonly STRING = 58;
	public static readonly LINE_PREFIX = 59;
	public static readonly WS = 60;
	public static readonly SheBangLine = 61;
	public static readonly Line = 62;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_justfile = 0;
	public static readonly RULE_item = 1;
	public static readonly RULE_eol = 2;
	public static readonly RULE_postComment = 3;
	public static readonly RULE_itemDocumentation = 4;
	public static readonly RULE_importStatement = 5;
	public static readonly RULE_aliasStatement = 6;
	public static readonly RULE_originRecipeName = 7;
	public static readonly RULE_setKeyword = 8;
	public static readonly RULE_aliasKeyword = 9;
	public static readonly RULE_importKeyword = 10;
	public static readonly RULE_exportKeyword = 11;
	public static readonly RULE_modKeyword = 12;
	public static readonly RULE_assignment = 13;
	public static readonly RULE_variableName = 14;
	public static readonly RULE_exportStatement = 15;
	public static readonly RULE_settingStatement = 16;
	public static readonly RULE_booleanSettingNames = 17;
	public static readonly RULE_stringSettingNames = 18;
	public static readonly RULE_stringSeqSettingNames = 19;
	public static readonly RULE_moduleStatement = 20;
	public static readonly RULE_boolean = 21;
	public static readonly RULE_booleanValues = 22;
	public static readonly RULE_stringSlice = 23;
	public static readonly RULE_expression = 24;
	public static readonly RULE_condition = 25;
	public static readonly RULE_conditionBlock = 26;
	public static readonly RULE_functionLeft = 27;
	public static readonly RULE_functionRight = 28;
	public static readonly RULE_functionValue = 29;
	public static readonly RULE_value = 30;
	public static readonly RULE_sequence = 31;
	public static readonly RULE_recipe = 32;
	public static readonly RULE_recipeName = 33;
	public static readonly RULE_attributes = 34;
	public static readonly RULE_attribute = 35;
	public static readonly RULE_parameterName = 36;
	public static readonly RULE_parameter = 37;
	public static readonly RULE_variadicModifier = 38;
	public static readonly RULE_variadic = 39;
	public static readonly RULE_dependency = 40;
	public static readonly RULE_body = 41;
	public static readonly RULE_rawBlocks = 42;
	public static readonly RULE_commandBlocks = 43;
	public static readonly RULE_interpolation = 44;
	public static readonly RULE_stringValue = 45;
	public static readonly literalNames: (string | null)[] = [ null, "'set'", 
                                                            "'alias'", "'import'", 
                                                            "'export'", 
                                                            "'mod'", "'true'", 
                                                            "'false'", "'if'", 
                                                            "'else'", "'=='", 
                                                            "'=~'", "'!='", 
                                                            "'#!'", "':='", 
                                                            "'&&'", "'*'", 
                                                            "'+'", "'#'", 
                                                            "':'", "','", 
                                                            "'['", "']'", 
                                                            "'{{'", "'}}'", 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "'@'", "'/'", 
                                                            "'\\'", "'$'", 
                                                            "'='", "'?'", 
                                                            "'allow-duplicate-recipes'", 
                                                            "'allow-duplicate-variables'", 
                                                            "'dotenv-load'", 
                                                            "'fallback'", 
                                                            "'ignore-comments'", 
                                                            "'positional-arguments'", 
                                                            "'quiet'", "'windows-powershell'", 
                                                            "'dotenv-filename'", 
                                                            "'dotenv-path'", 
                                                            "'dotenv-required'", 
                                                            "'tempdir'", 
                                                            "'shell'", "'windows-shell'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Set", 
                                                             "Alias", "Import", 
                                                             "Export", "Mod", 
                                                             "True", "False", 
                                                             "If", "Else", 
                                                             "EqualsEquals", 
                                                             "EqualsTilde", 
                                                             "NotEquals", 
                                                             "SheBang", 
                                                             "Assign", "LogicalAND", 
                                                             "Star", "Plus", 
                                                             "Sharp", "Colon", 
                                                             "Comm", "LeftBracket", 
                                                             "RightBracket", 
                                                             "DoubleLeftBrace", 
                                                             "DoubleRightBrace", 
                                                             "LeftBrace", 
                                                             "RightBrace", 
                                                             "LeftParen", 
                                                             "RightParen", 
                                                             "At", "Divide", 
                                                             "Slash", "Dollar", 
                                                             "Equal", "Question", 
                                                             "AllowDuplicateRecipesSetting", 
                                                             "AllowDuplicateVariablesSetting", 
                                                             "DotenvLoadSetting", 
                                                             "FallbackSetting", 
                                                             "IgnoreCommentsSetting", 
                                                             "PositionalArgumentsSetting", 
                                                             "QuietSetting", 
                                                             "WindowsPowershellSetting", 
                                                             "DotenvFilenameSetting", 
                                                             "DotenvPathSetting", 
                                                             "DotenvRequiredSetting", 
                                                             "TempdirSetting", 
                                                             "ShellSetting", 
                                                             "WindowsShellSetting", 
                                                             "COMMENT", 
                                                             "INDENTED_BACKTICK", 
                                                             "BACKTICK", 
                                                             "INDENT", "NAME", 
                                                             "NEWLINE", 
                                                             "INDENTED_RAW_STRING", 
                                                             "INDENTED_STRING", 
                                                             "RAW_STRING", 
                                                             "STRING", "LINE_PREFIX", 
                                                             "WS", "SheBangLine", 
                                                             "Line" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"justfile", "item", "eol", "postComment", "itemDocumentation", "importStatement", 
		"aliasStatement", "originRecipeName", "setKeyword", "aliasKeyword", "importKeyword", 
		"exportKeyword", "modKeyword", "assignment", "variableName", "exportStatement", 
		"settingStatement", "booleanSettingNames", "stringSettingNames", "stringSeqSettingNames", 
		"moduleStatement", "boolean", "booleanValues", "stringSlice", "expression", 
		"condition", "conditionBlock", "functionLeft", "functionRight", "functionValue", 
		"value", "sequence", "recipe", "recipeName", "attributes", "attribute", 
		"parameterName", "parameter", "variadicModifier", "variadic", "dependency", 
		"body", "rawBlocks", "commandBlocks", "interpolation", "stringValue",
	];
	public get grammarFileName(): string { return "JustfileParser.g4"; }
	public get literalNames(): (string | null)[] { return JustfileParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JustfileParser.symbolicNames; }
	public get ruleNames(): string[] { return JustfileParser.ruleNames; }
	public get serializedATN(): number[] { return JustfileParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JustfileParser._ATN, JustfileParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public justfile(): JustfileContext {
		let localctx: JustfileContext = new JustfileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JustfileParser.RULE_justfile);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538968126) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 49) !== 0)) {
				{
				{
				this.state = 92;
				this.item();
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this.match(JustfileParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public item(): ItemContext {
		let localctx: ItemContext = new ItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JustfileParser.RULE_item);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.aliasStatement();
				this.state = 102;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 101;
					this.eol();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 104;
				this.assignment();
				this.state = 106;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.eol();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 108;
				this.exportStatement();
				this.state = 110;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 109;
					this.eol();
					}
					break;
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 112;
				this.importStatement();
				this.state = 114;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 113;
					this.eol();
					}
					break;
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 116;
				this.moduleStatement();
				this.state = 118;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 117;
					this.eol();
					}
					break;
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 120;
				this.settingStatement();
				this.state = 122;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 121;
					this.eol();
					}
					break;
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 124;
				this.recipe();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 125;
				this.eol();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eol(): EolContext {
		let localctx: EolContext = new EolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JustfileParser.RULE_eol);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
			_la = this._input.LA(1);
			if(!(_la===49 || _la===54)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postComment(): PostCommentContext {
		let localctx: PostCommentContext = new PostCommentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JustfileParser.RULE_postComment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this.match(JustfileParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public itemDocumentation(): ItemDocumentationContext {
		let localctx: ItemDocumentationContext = new ItemDocumentationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JustfileParser.RULE_itemDocumentation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 132;
				this.match(JustfileParser.COMMENT);
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===49);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JustfileParser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 137;
				this.itemDocumentation();
				}
			}

			this.state = 140;
			this.importKeyword();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 141;
				this.match(JustfileParser.Question);
				}
			}

			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 15) !== 0)) {
				{
				this.state = 144;
				this.stringValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasStatement(): AliasStatementContext {
		let localctx: AliasStatementContext = new AliasStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JustfileParser.RULE_aliasStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 147;
				this.itemDocumentation();
				}
			}

			this.state = 150;
			this.aliasKeyword();
			this.state = 151;
			this.recipeName();
			this.state = 152;
			this.match(JustfileParser.Assign);
			this.state = 153;
			this.originRecipeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public originRecipeName(): OriginRecipeNameContext {
		let localctx: OriginRecipeNameContext = new OriginRecipeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JustfileParser.RULE_originRecipeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this.match(JustfileParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setKeyword(): SetKeywordContext {
		let localctx: SetKeywordContext = new SetKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JustfileParser.RULE_setKeyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			this.match(JustfileParser.Set);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasKeyword(): AliasKeywordContext {
		let localctx: AliasKeywordContext = new AliasKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JustfileParser.RULE_aliasKeyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this.match(JustfileParser.Alias);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importKeyword(): ImportKeywordContext {
		let localctx: ImportKeywordContext = new ImportKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JustfileParser.RULE_importKeyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 161;
			this.match(JustfileParser.Import);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportKeyword(): ExportKeywordContext {
		let localctx: ExportKeywordContext = new ExportKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, JustfileParser.RULE_exportKeyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.match(JustfileParser.Export);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modKeyword(): ModKeywordContext {
		let localctx: ModKeywordContext = new ModKeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JustfileParser.RULE_modKeyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this.match(JustfileParser.Mod);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, JustfileParser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			this.variableName();
			this.state = 168;
			this.match(JustfileParser.Assign);
			this.state = 169;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let localctx: VariableNameContext = new VariableNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, JustfileParser.RULE_variableName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this.match(JustfileParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let localctx: ExportStatementContext = new ExportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, JustfileParser.RULE_exportStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 173;
				this.itemDocumentation();
				}
			}

			this.state = 176;
			this.exportKeyword();
			this.state = 177;
			this.assignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public settingStatement(): SettingStatementContext {
		let localctx: SettingStatementContext = new SettingStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, JustfileParser.RULE_settingStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 179;
				this.itemDocumentation();
				}
			}

			this.state = 182;
			this.setKeyword();
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 183;
				this.booleanSettingNames();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 184;
					this.boolean_();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 187;
				this.stringSettingNames();
				this.state = 188;
				this.match(JustfileParser.Assign);
				this.state = 189;
				this.stringValue();
				}
				break;
			case 3:
				{
				this.state = 191;
				this.stringSeqSettingNames();
				this.state = 192;
				this.stringSlice();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanSettingNames(): BooleanSettingNamesContext {
		let localctx: BooleanSettingNamesContext = new BooleanSettingNamesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, JustfileParser.RULE_booleanSettingNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			_la = this._input.LA(1);
			if(!(_la===4 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 263423) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringSettingNames(): StringSettingNamesContext {
		let localctx: StringSettingNamesContext = new StringSettingNamesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, JustfileParser.RULE_stringSettingNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			_la = this._input.LA(1);
			if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 1035) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringSeqSettingNames(): StringSeqSettingNamesContext {
		let localctx: StringSeqSettingNamesContext = new StringSeqSettingNamesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, JustfileParser.RULE_stringSeqSettingNames);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			_la = this._input.LA(1);
			if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 67) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleStatement(): ModuleStatementContext {
		let localctx: ModuleStatementContext = new ModuleStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, JustfileParser.RULE_moduleStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 202;
				this.itemDocumentation();
				}
			}

			this.state = 205;
			this.modKeyword();
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 206;
				this.match(JustfileParser.Question);
				}
			}

			this.state = 209;
			this.match(JustfileParser.NAME);
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 15) !== 0)) {
				{
				this.state = 210;
				this.stringValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_(): BooleanContext {
		let localctx: BooleanContext = new BooleanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, JustfileParser.RULE_boolean);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this.match(JustfileParser.Assign);
			this.state = 214;
			this.booleanValues();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanValues(): BooleanValuesContext {
		let localctx: BooleanValuesContext = new BooleanValuesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, JustfileParser.RULE_booleanValues);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			_la = this._input.LA(1);
			if(!(_la===6 || _la===7)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringSlice(): StringSliceContext {
		let localctx: StringSliceContext = new StringSliceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, JustfileParser.RULE_stringSlice);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.match(JustfileParser.Assign);
			this.state = 219;
			this.match(JustfileParser.LeftBracket);
			this.state = 220;
			this.stringValue();
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 221;
					this.match(JustfileParser.Comm);
					this.state = 222;
					this.stringValue();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 228;
				this.match(JustfileParser.Comm);
				}
			}

			this.state = 231;
			this.match(JustfileParser.RightBracket);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, JustfileParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 233;
				this.match(JustfileParser.If);
				this.state = 234;
				this.condition();
				this.state = 235;
				this.conditionBlock();
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 236;
						this.match(JustfileParser.Else);
						this.state = 237;
						this.match(JustfileParser.If);
						this.state = 238;
						this.condition();
						this.state = 239;
						this.conditionBlock();
						}
						}
					}
					this.state = 245;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
				}
				this.state = 246;
				this.match(JustfileParser.Else);
				this.state = 247;
				this.conditionBlock();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===52) {
					{
					{
					this.state = 249;
					this.match(JustfileParser.INDENT);
					}
					}
					this.state = 254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4119855105) !== 0)) {
					{
					this.state = 255;
					this.value();
					}
				}

				this.state = 258;
				this.match(JustfileParser.Divide);
				this.state = 259;
				this.expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===52) {
					{
					{
					this.state = 260;
					this.match(JustfileParser.INDENT);
					}
					}
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4119855105) !== 0)) {
					{
					this.state = 266;
					this.value();
					}
				}

				this.state = 269;
				this.match(JustfileParser.Plus);
				this.state = 270;
				this.expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===52) {
					{
					{
					this.state = 271;
					this.match(JustfileParser.INDENT);
					}
					}
					this.state = 276;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 277;
				this.value();
				this.state = 279;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 278;
					this.eol();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, JustfileParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			this.expression();
			this.state = 284;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 285;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionBlock(): ConditionBlockContext {
		let localctx: ConditionBlockContext = new ConditionBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, JustfileParser.RULE_conditionBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			this.match(JustfileParser.LeftBrace);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===54) {
				{
				this.state = 288;
				this.eol();
				}
			}

			this.state = 291;
			this.expression();
			this.state = 292;
			this.match(JustfileParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionLeft(): FunctionLeftContext {
		let localctx: FunctionLeftContext = new FunctionLeftContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, JustfileParser.RULE_functionLeft);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 53:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 294;
				this.match(JustfileParser.NAME);
				this.state = 295;
				this.match(JustfileParser.LeftParen);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 296;
				this.match(JustfileParser.ShellSetting);
				this.state = 297;
				this.match(JustfileParser.LeftParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionRight(): FunctionRightContext {
		let localctx: FunctionRightContext = new FunctionRightContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, JustfileParser.RULE_functionRight);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.match(JustfileParser.RightParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionValue(): FunctionValueContext {
		let localctx: FunctionValueContext = new FunctionValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, JustfileParser.RULE_functionValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.functionLeft();
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1208090880) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 3961) !== 0)) {
				{
				this.state = 303;
				this.sequence();
				}
			}

			this.state = 306;
			this.functionRight();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, JustfileParser.RULE_value);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 308;
				this.functionValue();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 309;
				this.match(JustfileParser.BACKTICK);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 310;
				this.match(JustfileParser.INDENTED_BACKTICK);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 311;
				this.match(JustfileParser.NAME);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 312;
				this.stringValue();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 313;
				this.match(JustfileParser.LeftParen);
				this.state = 314;
				this.expression();
				this.state = 315;
				this.match(JustfileParser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequence(): SequenceContext {
		let localctx: SequenceContext = new SequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, JustfileParser.RULE_sequence);
		let _la: number;
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 319;
				this.expression();
				this.state = 320;
				this.match(JustfileParser.Comm);
				this.state = 321;
				this.sequence();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 323;
				this.expression();
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 324;
					this.match(JustfileParser.Comm);
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recipe(): RecipeContext {
		let localctx: RecipeContext = new RecipeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, JustfileParser.RULE_recipe);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 329;
				this.itemDocumentation();
				}
			}

			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 332;
				this.attributes();
				}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 338;
				this.match(JustfileParser.At);
				}
			}

			this.state = 341;
			this.recipeName();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===32 || _la===53) {
				{
				{
				this.state = 342;
				this.parameter();
				}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16 || _la===17) {
				{
				this.state = 348;
				this.variadic();
				}
			}

			this.state = 351;
			this.match(JustfileParser.Colon);
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===27 || _la===53) {
				{
				{
				this.state = 352;
				this.dependency();
				}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 358;
				this.match(JustfileParser.LogicalAND);
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 359;
					this.dependency();
					}
					}
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===27 || _la===53);
				}
			}

			this.state = 366;
			this.eol();
			this.state = 368;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				{
				this.state = 367;
				this.body();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public recipeName(): RecipeNameContext {
		let localctx: RecipeNameContext = new RecipeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, JustfileParser.RULE_recipeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this.match(JustfileParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let localctx: AttributesContext = new AttributesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, JustfileParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 372;
			this.match(JustfileParser.LeftBracket);
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 373;
				this.attribute();
				}
				}
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 379;
			this.match(JustfileParser.RightBracket);
			this.state = 380;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, JustfileParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.match(JustfileParser.NAME);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 383;
				this.match(JustfileParser.LeftParen);
				this.state = 384;
				this.stringValue();
				this.state = 385;
				this.match(JustfileParser.RightParen);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterName(): ParameterNameContext {
		let localctx: ParameterNameContext = new ParameterNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, JustfileParser.RULE_parameterName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 389;
				this.match(JustfileParser.Dollar);
				}
			}

			this.state = 392;
			this.match(JustfileParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, JustfileParser.RULE_parameter);
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 394;
				this.parameterName();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 395;
				this.parameterName();
				this.state = 396;
				this.match(JustfileParser.Equal);
				this.state = 397;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variadicModifier(): VariadicModifierContext {
		let localctx: VariadicModifierContext = new VariadicModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, JustfileParser.RULE_variadicModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 401;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===17)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variadic(): VariadicContext {
		let localctx: VariadicContext = new VariadicContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, JustfileParser.RULE_variadic);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 403;
			this.variadicModifier();
			this.state = 404;
			this.parameter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dependency(): DependencyContext {
		let localctx: DependencyContext = new DependencyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, JustfileParser.RULE_dependency);
		let _la: number;
		try {
			this.state = 417;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 53:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 406;
				this.recipeName();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 407;
				this.match(JustfileParser.LeftParen);
				this.state = 408;
				this.recipeName();
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1208090880) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 3961) !== 0)) {
					{
					{
					this.state = 409;
					this.expression();
					}
					}
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 415;
				this.match(JustfileParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let localctx: BodyContext = new BodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, JustfileParser.RULE_body);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 419;
				this.rawBlocks();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 420;
				this.commandBlocks();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rawBlocks(): RawBlocksContext {
		let localctx: RawBlocksContext = new RawBlocksContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, JustfileParser.RULE_rawBlocks);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
			this.match(JustfileParser.INDENT);
			this.state = 424;
			this.match(JustfileParser.SheBangLine);
			this.state = 428;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 428;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 52:
						{
						this.state = 425;
						this.match(JustfileParser.INDENT);
						this.state = 426;
						this.match(JustfileParser.Line);
						}
						break;
					case 54:
						{
						this.state = 427;
						this.match(JustfileParser.NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 430;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public commandBlocks(): CommandBlocksContext {
		let localctx: CommandBlocksContext = new CommandBlocksContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, JustfileParser.RULE_commandBlocks);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 435;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 435;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 52:
						{
						this.state = 432;
						this.match(JustfileParser.INDENT);
						this.state = 433;
						this.match(JustfileParser.Line);
						}
						break;
					case 54:
						{
						this.state = 434;
						this.match(JustfileParser.NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 437;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interpolation(): InterpolationContext {
		let localctx: InterpolationContext = new InterpolationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, JustfileParser.RULE_interpolation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 439;
			this.match(JustfileParser.DoubleLeftBrace);
			this.state = 440;
			this.expression();
			this.state = 441;
			this.match(JustfileParser.DoubleRightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stringValue(): StringValueContext {
		let localctx: StringValueContext = new StringValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, JustfileParser.RULE_stringValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			_la = this._input.LA(1);
			if(!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,62,446,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,1,0,
	5,0,94,8,0,10,0,12,0,97,9,0,1,0,1,0,1,1,1,1,3,1,103,8,1,1,1,1,1,3,1,107,
	8,1,1,1,1,1,3,1,111,8,1,1,1,1,1,3,1,115,8,1,1,1,1,1,3,1,119,8,1,1,1,1,1,
	3,1,123,8,1,1,1,1,1,3,1,127,8,1,1,2,1,2,1,3,1,3,1,4,4,4,134,8,4,11,4,12,
	4,135,1,5,3,5,139,8,5,1,5,1,5,3,5,143,8,5,1,5,3,5,146,8,5,1,6,3,6,149,8,
	6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,
	1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,15,3,15,175,8,15,1,15,1,15,1,15,1,
	16,3,16,181,8,16,1,16,1,16,1,16,3,16,186,8,16,1,16,1,16,1,16,1,16,1,16,
	1,16,1,16,3,16,195,8,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,3,20,204,8,20,
	1,20,1,20,3,20,208,8,20,1,20,1,20,3,20,212,8,20,1,21,1,21,1,21,1,22,1,22,
	1,23,1,23,1,23,1,23,1,23,5,23,224,8,23,10,23,12,23,227,9,23,1,23,3,23,230,
	8,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,5,24,242,8,24,10,
	24,12,24,245,9,24,1,24,1,24,1,24,1,24,5,24,251,8,24,10,24,12,24,254,9,24,
	1,24,3,24,257,8,24,1,24,1,24,1,24,5,24,262,8,24,10,24,12,24,265,9,24,1,
	24,3,24,268,8,24,1,24,1,24,1,24,5,24,273,8,24,10,24,12,24,276,9,24,1,24,
	1,24,3,24,280,8,24,3,24,282,8,24,1,25,1,25,1,25,1,25,1,26,1,26,3,26,290,
	8,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,3,27,299,8,27,1,28,1,28,1,29,1,
	29,3,29,305,8,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
	3,30,318,8,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,326,8,31,3,31,328,8,31,
	1,32,3,32,331,8,32,1,32,5,32,334,8,32,10,32,12,32,337,9,32,1,32,3,32,340,
	8,32,1,32,1,32,5,32,344,8,32,10,32,12,32,347,9,32,1,32,3,32,350,8,32,1,
	32,1,32,5,32,354,8,32,10,32,12,32,357,9,32,1,32,1,32,4,32,361,8,32,11,32,
	12,32,362,3,32,365,8,32,1,32,1,32,3,32,369,8,32,1,33,1,33,1,34,1,34,5,34,
	375,8,34,10,34,12,34,378,9,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,3,
	35,388,8,35,1,36,3,36,391,8,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,3,37,
	400,8,37,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,40,5,40,411,8,40,10,
	40,12,40,414,9,40,1,40,1,40,3,40,418,8,40,1,41,1,41,3,41,422,8,41,1,42,
	1,42,1,42,1,42,1,42,4,42,429,8,42,11,42,12,42,430,1,43,1,43,1,43,4,43,436,
	8,43,11,43,12,43,437,1,44,1,44,1,44,1,44,1,45,1,45,1,45,0,0,46,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,0,8,2,0,49,49,54,
	54,4,0,4,4,35,42,45,45,53,53,3,0,43,44,46,46,53,53,2,0,47,48,53,53,1,0,
	6,7,1,0,10,12,1,0,16,17,1,0,55,58,468,0,95,1,0,0,0,2,126,1,0,0,0,4,128,
	1,0,0,0,6,130,1,0,0,0,8,133,1,0,0,0,10,138,1,0,0,0,12,148,1,0,0,0,14,155,
	1,0,0,0,16,157,1,0,0,0,18,159,1,0,0,0,20,161,1,0,0,0,22,163,1,0,0,0,24,
	165,1,0,0,0,26,167,1,0,0,0,28,171,1,0,0,0,30,174,1,0,0,0,32,180,1,0,0,0,
	34,196,1,0,0,0,36,198,1,0,0,0,38,200,1,0,0,0,40,203,1,0,0,0,42,213,1,0,
	0,0,44,216,1,0,0,0,46,218,1,0,0,0,48,281,1,0,0,0,50,283,1,0,0,0,52,287,
	1,0,0,0,54,298,1,0,0,0,56,300,1,0,0,0,58,302,1,0,0,0,60,317,1,0,0,0,62,
	327,1,0,0,0,64,330,1,0,0,0,66,370,1,0,0,0,68,372,1,0,0,0,70,382,1,0,0,0,
	72,390,1,0,0,0,74,399,1,0,0,0,76,401,1,0,0,0,78,403,1,0,0,0,80,417,1,0,
	0,0,82,421,1,0,0,0,84,423,1,0,0,0,86,435,1,0,0,0,88,439,1,0,0,0,90,443,
	1,0,0,0,92,94,3,2,1,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,
	0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,0,0,1,99,1,1,0,0,0,100,102,3,
	12,6,0,101,103,3,4,2,0,102,101,1,0,0,0,102,103,1,0,0,0,103,127,1,0,0,0,
	104,106,3,26,13,0,105,107,3,4,2,0,106,105,1,0,0,0,106,107,1,0,0,0,107,127,
	1,0,0,0,108,110,3,30,15,0,109,111,3,4,2,0,110,109,1,0,0,0,110,111,1,0,0,
	0,111,127,1,0,0,0,112,114,3,10,5,0,113,115,3,4,2,0,114,113,1,0,0,0,114,
	115,1,0,0,0,115,127,1,0,0,0,116,118,3,40,20,0,117,119,3,4,2,0,118,117,1,
	0,0,0,118,119,1,0,0,0,119,127,1,0,0,0,120,122,3,32,16,0,121,123,3,4,2,0,
	122,121,1,0,0,0,122,123,1,0,0,0,123,127,1,0,0,0,124,127,3,64,32,0,125,127,
	3,4,2,0,126,100,1,0,0,0,126,104,1,0,0,0,126,108,1,0,0,0,126,112,1,0,0,0,
	126,116,1,0,0,0,126,120,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,3,1,
	0,0,0,128,129,7,0,0,0,129,5,1,0,0,0,130,131,5,49,0,0,131,7,1,0,0,0,132,
	134,5,49,0,0,133,132,1,0,0,0,134,135,1,0,0,0,135,133,1,0,0,0,135,136,1,
	0,0,0,136,9,1,0,0,0,137,139,3,8,4,0,138,137,1,0,0,0,138,139,1,0,0,0,139,
	140,1,0,0,0,140,142,3,20,10,0,141,143,5,34,0,0,142,141,1,0,0,0,142,143,
	1,0,0,0,143,145,1,0,0,0,144,146,3,90,45,0,145,144,1,0,0,0,145,146,1,0,0,
	0,146,11,1,0,0,0,147,149,3,8,4,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,
	1,0,0,0,150,151,3,18,9,0,151,152,3,66,33,0,152,153,5,14,0,0,153,154,3,14,
	7,0,154,13,1,0,0,0,155,156,5,53,0,0,156,15,1,0,0,0,157,158,5,1,0,0,158,
	17,1,0,0,0,159,160,5,2,0,0,160,19,1,0,0,0,161,162,5,3,0,0,162,21,1,0,0,
	0,163,164,5,4,0,0,164,23,1,0,0,0,165,166,5,5,0,0,166,25,1,0,0,0,167,168,
	3,28,14,0,168,169,5,14,0,0,169,170,3,48,24,0,170,27,1,0,0,0,171,172,5,53,
	0,0,172,29,1,0,0,0,173,175,3,8,4,0,174,173,1,0,0,0,174,175,1,0,0,0,175,
	176,1,0,0,0,176,177,3,22,11,0,177,178,3,26,13,0,178,31,1,0,0,0,179,181,
	3,8,4,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,194,3,16,8,
	0,183,185,3,34,17,0,184,186,3,42,21,0,185,184,1,0,0,0,185,186,1,0,0,0,186,
	195,1,0,0,0,187,188,3,36,18,0,188,189,5,14,0,0,189,190,3,90,45,0,190,195,
	1,0,0,0,191,192,3,38,19,0,192,193,3,46,23,0,193,195,1,0,0,0,194,183,1,0,
	0,0,194,187,1,0,0,0,194,191,1,0,0,0,195,33,1,0,0,0,196,197,7,1,0,0,197,
	35,1,0,0,0,198,199,7,2,0,0,199,37,1,0,0,0,200,201,7,3,0,0,201,39,1,0,0,
	0,202,204,3,8,4,0,203,202,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,207,
	3,24,12,0,206,208,5,34,0,0,207,206,1,0,0,0,207,208,1,0,0,0,208,209,1,0,
	0,0,209,211,5,53,0,0,210,212,3,90,45,0,211,210,1,0,0,0,211,212,1,0,0,0,
	212,41,1,0,0,0,213,214,5,14,0,0,214,215,3,44,22,0,215,43,1,0,0,0,216,217,
	7,4,0,0,217,45,1,0,0,0,218,219,5,14,0,0,219,220,5,21,0,0,220,225,3,90,45,
	0,221,222,5,20,0,0,222,224,3,90,45,0,223,221,1,0,0,0,224,227,1,0,0,0,225,
	223,1,0,0,0,225,226,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,228,230,5,20,
	0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,5,22,0,0,232,
	47,1,0,0,0,233,234,5,8,0,0,234,235,3,50,25,0,235,243,3,52,26,0,236,237,
	5,9,0,0,237,238,5,8,0,0,238,239,3,50,25,0,239,240,3,52,26,0,240,242,1,0,
	0,0,241,236,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,
	246,1,0,0,0,245,243,1,0,0,0,246,247,5,9,0,0,247,248,3,52,26,0,248,282,1,
	0,0,0,249,251,5,52,0,0,250,249,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,
	252,253,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,255,257,3,60,30,0,256,255,
	1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,259,5,30,0,0,259,282,3,48,24,
	0,260,262,5,52,0,0,261,260,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,0,263,
	264,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,266,268,3,60,30,0,267,266,1,
	0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,270,5,17,0,0,270,282,3,48,24,
	0,271,273,5,52,0,0,272,271,1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,
	275,1,0,0,0,275,277,1,0,0,0,276,274,1,0,0,0,277,279,3,60,30,0,278,280,3,
	4,2,0,279,278,1,0,0,0,279,280,1,0,0,0,280,282,1,0,0,0,281,233,1,0,0,0,281,
	252,1,0,0,0,281,263,1,0,0,0,281,274,1,0,0,0,282,49,1,0,0,0,283,284,3,48,
	24,0,284,285,7,5,0,0,285,286,3,48,24,0,286,51,1,0,0,0,287,289,5,25,0,0,
	288,290,3,4,2,0,289,288,1,0,0,0,289,290,1,0,0,0,290,291,1,0,0,0,291,292,
	3,48,24,0,292,293,5,26,0,0,293,53,1,0,0,0,294,295,5,53,0,0,295,299,5,27,
	0,0,296,297,5,47,0,0,297,299,5,27,0,0,298,294,1,0,0,0,298,296,1,0,0,0,299,
	55,1,0,0,0,300,301,5,28,0,0,301,57,1,0,0,0,302,304,3,54,27,0,303,305,3,
	62,31,0,304,303,1,0,0,0,304,305,1,0,0,0,305,306,1,0,0,0,306,307,3,56,28,
	0,307,59,1,0,0,0,308,318,3,58,29,0,309,318,5,51,0,0,310,318,5,50,0,0,311,
	318,5,53,0,0,312,318,3,90,45,0,313,314,5,27,0,0,314,315,3,48,24,0,315,316,
	5,28,0,0,316,318,1,0,0,0,317,308,1,0,0,0,317,309,1,0,0,0,317,310,1,0,0,
	0,317,311,1,0,0,0,317,312,1,0,0,0,317,313,1,0,0,0,318,61,1,0,0,0,319,320,
	3,48,24,0,320,321,5,20,0,0,321,322,3,62,31,0,322,328,1,0,0,0,323,325,3,
	48,24,0,324,326,5,20,0,0,325,324,1,0,0,0,325,326,1,0,0,0,326,328,1,0,0,
	0,327,319,1,0,0,0,327,323,1,0,0,0,328,63,1,0,0,0,329,331,3,8,4,0,330,329,
	1,0,0,0,330,331,1,0,0,0,331,335,1,0,0,0,332,334,3,68,34,0,333,332,1,0,0,
	0,334,337,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,339,1,0,0,0,337,335,
	1,0,0,0,338,340,5,29,0,0,339,338,1,0,0,0,339,340,1,0,0,0,340,341,1,0,0,
	0,341,345,3,66,33,0,342,344,3,74,37,0,343,342,1,0,0,0,344,347,1,0,0,0,345,
	343,1,0,0,0,345,346,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,348,350,3,78,
	39,0,349,348,1,0,0,0,349,350,1,0,0,0,350,351,1,0,0,0,351,355,5,19,0,0,352,
	354,3,80,40,0,353,352,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,355,356,1,
	0,0,0,356,364,1,0,0,0,357,355,1,0,0,0,358,360,5,15,0,0,359,361,3,80,40,
	0,360,359,1,0,0,0,361,362,1,0,0,0,362,360,1,0,0,0,362,363,1,0,0,0,363,365,
	1,0,0,0,364,358,1,0,0,0,364,365,1,0,0,0,365,366,1,0,0,0,366,368,3,4,2,0,
	367,369,3,82,41,0,368,367,1,0,0,0,368,369,1,0,0,0,369,65,1,0,0,0,370,371,
	5,53,0,0,371,67,1,0,0,0,372,376,5,21,0,0,373,375,3,70,35,0,374,373,1,0,
	0,0,375,378,1,0,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,379,1,0,0,0,378,
	376,1,0,0,0,379,380,5,22,0,0,380,381,3,4,2,0,381,69,1,0,0,0,382,387,5,53,
	0,0,383,384,5,27,0,0,384,385,3,90,45,0,385,386,5,28,0,0,386,388,1,0,0,0,
	387,383,1,0,0,0,387,388,1,0,0,0,388,71,1,0,0,0,389,391,5,32,0,0,390,389,
	1,0,0,0,390,391,1,0,0,0,391,392,1,0,0,0,392,393,5,53,0,0,393,73,1,0,0,0,
	394,400,3,72,36,0,395,396,3,72,36,0,396,397,5,33,0,0,397,398,3,60,30,0,
	398,400,1,0,0,0,399,394,1,0,0,0,399,395,1,0,0,0,400,75,1,0,0,0,401,402,
	7,6,0,0,402,77,1,0,0,0,403,404,3,76,38,0,404,405,3,74,37,0,405,79,1,0,0,
	0,406,418,3,66,33,0,407,408,5,27,0,0,408,412,3,66,33,0,409,411,3,48,24,
	0,410,409,1,0,0,0,411,414,1,0,0,0,412,410,1,0,0,0,412,413,1,0,0,0,413,415,
	1,0,0,0,414,412,1,0,0,0,415,416,5,28,0,0,416,418,1,0,0,0,417,406,1,0,0,
	0,417,407,1,0,0,0,418,81,1,0,0,0,419,422,3,84,42,0,420,422,3,86,43,0,421,
	419,1,0,0,0,421,420,1,0,0,0,422,83,1,0,0,0,423,424,5,52,0,0,424,428,5,61,
	0,0,425,426,5,52,0,0,426,429,5,62,0,0,427,429,5,54,0,0,428,425,1,0,0,0,
	428,427,1,0,0,0,429,430,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,85,
	1,0,0,0,432,433,5,52,0,0,433,436,5,62,0,0,434,436,5,54,0,0,435,432,1,0,
	0,0,435,434,1,0,0,0,436,437,1,0,0,0,437,435,1,0,0,0,437,438,1,0,0,0,438,
	87,1,0,0,0,439,440,5,23,0,0,440,441,3,48,24,0,441,442,5,24,0,0,442,89,1,
	0,0,0,443,444,7,7,0,0,444,91,1,0,0,0,56,95,102,106,110,114,118,122,126,
	135,138,142,145,148,174,180,185,194,203,207,211,225,229,243,252,256,263,
	267,274,279,281,289,298,304,317,325,327,330,335,339,345,349,355,362,364,
	368,376,387,390,399,412,417,421,428,430,435,437];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JustfileParser.__ATN) {
			JustfileParser.__ATN = new ATNDeserializer().deserialize(JustfileParser._serializedATN);
		}

		return JustfileParser.__ATN;
	}


	static DecisionsToDFA = JustfileParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class JustfileContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(JustfileParser.EOF, 0);
	}
	public item_list(): ItemContext[] {
		return this.getTypedRuleContexts(ItemContext) as ItemContext[];
	}
	public item(i: number): ItemContext {
		return this.getTypedRuleContext(ItemContext, i) as ItemContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_justfile;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterJustfile) {
	 		listener.enterJustfile(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitJustfile) {
	 		listener.exitJustfile(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasStatement(): AliasStatementContext {
		return this.getTypedRuleContext(AliasStatementContext, 0) as AliasStatementContext;
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public exportStatement(): ExportStatementContext {
		return this.getTypedRuleContext(ExportStatementContext, 0) as ExportStatementContext;
	}
	public importStatement(): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, 0) as ImportStatementContext;
	}
	public moduleStatement(): ModuleStatementContext {
		return this.getTypedRuleContext(ModuleStatementContext, 0) as ModuleStatementContext;
	}
	public settingStatement(): SettingStatementContext {
		return this.getTypedRuleContext(SettingStatementContext, 0) as SettingStatementContext;
	}
	public recipe(): RecipeContext {
		return this.getTypedRuleContext(RecipeContext, 0) as RecipeContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_item;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterItem) {
	 		listener.enterItem(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitItem) {
	 		listener.exitItem(this);
		}
	}
}


export class EolContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(JustfileParser.NEWLINE, 0);
	}
	public COMMENT(): TerminalNode {
		return this.getToken(JustfileParser.COMMENT, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_eol;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterEol) {
	 		listener.enterEol(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitEol) {
	 		listener.exitEol(this);
		}
	}
}


export class PostCommentContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(JustfileParser.COMMENT, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_postComment;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterPostComment) {
	 		listener.enterPostComment(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitPostComment) {
	 		listener.exitPostComment(this);
		}
	}
}


export class ItemDocumentationContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.COMMENT);
	}
	public COMMENT(i: number): TerminalNode {
		return this.getToken(JustfileParser.COMMENT, i);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_itemDocumentation;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterItemDocumentation) {
	 		listener.enterItemDocumentation(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitItemDocumentation) {
	 		listener.exitItemDocumentation(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importKeyword(): ImportKeywordContext {
		return this.getTypedRuleContext(ImportKeywordContext, 0) as ImportKeywordContext;
	}
	public itemDocumentation(): ItemDocumentationContext {
		return this.getTypedRuleContext(ItemDocumentationContext, 0) as ItemDocumentationContext;
	}
	public Question(): TerminalNode {
		return this.getToken(JustfileParser.Question, 0);
	}
	public stringValue(): StringValueContext {
		return this.getTypedRuleContext(StringValueContext, 0) as StringValueContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_importStatement;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
}


export class AliasStatementContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasKeyword(): AliasKeywordContext {
		return this.getTypedRuleContext(AliasKeywordContext, 0) as AliasKeywordContext;
	}
	public recipeName(): RecipeNameContext {
		return this.getTypedRuleContext(RecipeNameContext, 0) as RecipeNameContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JustfileParser.Assign, 0);
	}
	public originRecipeName(): OriginRecipeNameContext {
		return this.getTypedRuleContext(OriginRecipeNameContext, 0) as OriginRecipeNameContext;
	}
	public itemDocumentation(): ItemDocumentationContext {
		return this.getTypedRuleContext(ItemDocumentationContext, 0) as ItemDocumentationContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_aliasStatement;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterAliasStatement) {
	 		listener.enterAliasStatement(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitAliasStatement) {
	 		listener.exitAliasStatement(this);
		}
	}
}


export class OriginRecipeNameContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_originRecipeName;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterOriginRecipeName) {
	 		listener.enterOriginRecipeName(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitOriginRecipeName) {
	 		listener.exitOriginRecipeName(this);
		}
	}
}


export class SetKeywordContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Set(): TerminalNode {
		return this.getToken(JustfileParser.Set, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_setKeyword;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterSetKeyword) {
	 		listener.enterSetKeyword(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitSetKeyword) {
	 		listener.exitSetKeyword(this);
		}
	}
}


export class AliasKeywordContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Alias(): TerminalNode {
		return this.getToken(JustfileParser.Alias, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_aliasKeyword;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterAliasKeyword) {
	 		listener.enterAliasKeyword(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitAliasKeyword) {
	 		listener.exitAliasKeyword(this);
		}
	}
}


export class ImportKeywordContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Import(): TerminalNode {
		return this.getToken(JustfileParser.Import, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_importKeyword;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterImportKeyword) {
	 		listener.enterImportKeyword(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitImportKeyword) {
	 		listener.exitImportKeyword(this);
		}
	}
}


export class ExportKeywordContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Export(): TerminalNode {
		return this.getToken(JustfileParser.Export, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_exportKeyword;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterExportKeyword) {
	 		listener.enterExportKeyword(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitExportKeyword) {
	 		listener.exitExportKeyword(this);
		}
	}
}


export class ModKeywordContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Mod(): TerminalNode {
		return this.getToken(JustfileParser.Mod, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_modKeyword;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterModKeyword) {
	 		listener.enterModKeyword(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitModKeyword) {
	 		listener.exitModKeyword(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JustfileParser.Assign, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_assignment;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_variableName;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterVariableName) {
	 		listener.enterVariableName(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitVariableName) {
	 		listener.exitVariableName(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exportKeyword(): ExportKeywordContext {
		return this.getTypedRuleContext(ExportKeywordContext, 0) as ExportKeywordContext;
	}
	public assignment(): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, 0) as AssignmentContext;
	}
	public itemDocumentation(): ItemDocumentationContext {
		return this.getTypedRuleContext(ItemDocumentationContext, 0) as ItemDocumentationContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_exportStatement;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterExportStatement) {
	 		listener.enterExportStatement(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitExportStatement) {
	 		listener.exitExportStatement(this);
		}
	}
}


export class SettingStatementContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public setKeyword(): SetKeywordContext {
		return this.getTypedRuleContext(SetKeywordContext, 0) as SetKeywordContext;
	}
	public booleanSettingNames(): BooleanSettingNamesContext {
		return this.getTypedRuleContext(BooleanSettingNamesContext, 0) as BooleanSettingNamesContext;
	}
	public stringSettingNames(): StringSettingNamesContext {
		return this.getTypedRuleContext(StringSettingNamesContext, 0) as StringSettingNamesContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JustfileParser.Assign, 0);
	}
	public stringValue(): StringValueContext {
		return this.getTypedRuleContext(StringValueContext, 0) as StringValueContext;
	}
	public stringSeqSettingNames(): StringSeqSettingNamesContext {
		return this.getTypedRuleContext(StringSeqSettingNamesContext, 0) as StringSeqSettingNamesContext;
	}
	public stringSlice(): StringSliceContext {
		return this.getTypedRuleContext(StringSliceContext, 0) as StringSliceContext;
	}
	public itemDocumentation(): ItemDocumentationContext {
		return this.getTypedRuleContext(ItemDocumentationContext, 0) as ItemDocumentationContext;
	}
	public boolean_(): BooleanContext {
		return this.getTypedRuleContext(BooleanContext, 0) as BooleanContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_settingStatement;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterSettingStatement) {
	 		listener.enterSettingStatement(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitSettingStatement) {
	 		listener.exitSettingStatement(this);
		}
	}
}


export class BooleanSettingNamesContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AllowDuplicateRecipesSetting(): TerminalNode {
		return this.getToken(JustfileParser.AllowDuplicateRecipesSetting, 0);
	}
	public AllowDuplicateVariablesSetting(): TerminalNode {
		return this.getToken(JustfileParser.AllowDuplicateVariablesSetting, 0);
	}
	public DotenvLoadSetting(): TerminalNode {
		return this.getToken(JustfileParser.DotenvLoadSetting, 0);
	}
	public DotenvRequiredSetting(): TerminalNode {
		return this.getToken(JustfileParser.DotenvRequiredSetting, 0);
	}
	public FallbackSetting(): TerminalNode {
		return this.getToken(JustfileParser.FallbackSetting, 0);
	}
	public IgnoreCommentsSetting(): TerminalNode {
		return this.getToken(JustfileParser.IgnoreCommentsSetting, 0);
	}
	public PositionalArgumentsSetting(): TerminalNode {
		return this.getToken(JustfileParser.PositionalArgumentsSetting, 0);
	}
	public QuietSetting(): TerminalNode {
		return this.getToken(JustfileParser.QuietSetting, 0);
	}
	public WindowsPowershellSetting(): TerminalNode {
		return this.getToken(JustfileParser.WindowsPowershellSetting, 0);
	}
	public Export(): TerminalNode {
		return this.getToken(JustfileParser.Export, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_booleanSettingNames;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterBooleanSettingNames) {
	 		listener.enterBooleanSettingNames(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitBooleanSettingNames) {
	 		listener.exitBooleanSettingNames(this);
		}
	}
}


export class StringSettingNamesContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DotenvFilenameSetting(): TerminalNode {
		return this.getToken(JustfileParser.DotenvFilenameSetting, 0);
	}
	public DotenvPathSetting(): TerminalNode {
		return this.getToken(JustfileParser.DotenvPathSetting, 0);
	}
	public TempdirSetting(): TerminalNode {
		return this.getToken(JustfileParser.TempdirSetting, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_stringSettingNames;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterStringSettingNames) {
	 		listener.enterStringSettingNames(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitStringSettingNames) {
	 		listener.exitStringSettingNames(this);
		}
	}
}


export class StringSeqSettingNamesContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ShellSetting(): TerminalNode {
		return this.getToken(JustfileParser.ShellSetting, 0);
	}
	public WindowsShellSetting(): TerminalNode {
		return this.getToken(JustfileParser.WindowsShellSetting, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_stringSeqSettingNames;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterStringSeqSettingNames) {
	 		listener.enterStringSeqSettingNames(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitStringSeqSettingNames) {
	 		listener.exitStringSeqSettingNames(this);
		}
	}
}


export class ModuleStatementContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public modKeyword(): ModKeywordContext {
		return this.getTypedRuleContext(ModKeywordContext, 0) as ModKeywordContext;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
	public itemDocumentation(): ItemDocumentationContext {
		return this.getTypedRuleContext(ItemDocumentationContext, 0) as ItemDocumentationContext;
	}
	public Question(): TerminalNode {
		return this.getToken(JustfileParser.Question, 0);
	}
	public stringValue(): StringValueContext {
		return this.getTypedRuleContext(StringValueContext, 0) as StringValueContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_moduleStatement;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterModuleStatement) {
	 		listener.enterModuleStatement(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitModuleStatement) {
	 		listener.exitModuleStatement(this);
		}
	}
}


export class BooleanContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(JustfileParser.Assign, 0);
	}
	public booleanValues(): BooleanValuesContext {
		return this.getTypedRuleContext(BooleanValuesContext, 0) as BooleanValuesContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_boolean;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterBoolean) {
	 		listener.enterBoolean(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitBoolean) {
	 		listener.exitBoolean(this);
		}
	}
}


export class BooleanValuesContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public True(): TerminalNode {
		return this.getToken(JustfileParser.True, 0);
	}
	public False(): TerminalNode {
		return this.getToken(JustfileParser.False, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_booleanValues;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterBooleanValues) {
	 		listener.enterBooleanValues(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitBooleanValues) {
	 		listener.exitBooleanValues(this);
		}
	}
}


export class StringSliceContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Assign(): TerminalNode {
		return this.getToken(JustfileParser.Assign, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(JustfileParser.LeftBracket, 0);
	}
	public stringValue_list(): StringValueContext[] {
		return this.getTypedRuleContexts(StringValueContext) as StringValueContext[];
	}
	public stringValue(i: number): StringValueContext {
		return this.getTypedRuleContext(StringValueContext, i) as StringValueContext;
	}
	public RightBracket(): TerminalNode {
		return this.getToken(JustfileParser.RightBracket, 0);
	}
	public Comm_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.Comm);
	}
	public Comm(i: number): TerminalNode {
		return this.getToken(JustfileParser.Comm, i);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_stringSlice;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterStringSlice) {
	 		listener.enterStringSlice(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitStringSlice) {
	 		listener.exitStringSlice(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.If);
	}
	public If(i: number): TerminalNode {
		return this.getToken(JustfileParser.If, i);
	}
	public condition_list(): ConditionContext[] {
		return this.getTypedRuleContexts(ConditionContext) as ConditionContext[];
	}
	public condition(i: number): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, i) as ConditionContext;
	}
	public conditionBlock_list(): ConditionBlockContext[] {
		return this.getTypedRuleContexts(ConditionBlockContext) as ConditionBlockContext[];
	}
	public conditionBlock(i: number): ConditionBlockContext {
		return this.getTypedRuleContext(ConditionBlockContext, i) as ConditionBlockContext;
	}
	public Else_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.Else);
	}
	public Else(i: number): TerminalNode {
		return this.getToken(JustfileParser.Else, i);
	}
	public Divide(): TerminalNode {
		return this.getToken(JustfileParser.Divide, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INDENT_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.INDENT);
	}
	public INDENT(i: number): TerminalNode {
		return this.getToken(JustfileParser.INDENT, i);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public Plus(): TerminalNode {
		return this.getToken(JustfileParser.Plus, 0);
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_expression;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EqualsEquals(): TerminalNode {
		return this.getToken(JustfileParser.EqualsEquals, 0);
	}
	public EqualsTilde(): TerminalNode {
		return this.getToken(JustfileParser.EqualsTilde, 0);
	}
	public NotEquals(): TerminalNode {
		return this.getToken(JustfileParser.NotEquals, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_condition;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterCondition) {
	 		listener.enterCondition(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitCondition) {
	 		listener.exitCondition(this);
		}
	}
}


export class ConditionBlockContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(JustfileParser.LeftBrace, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightBrace(): TerminalNode {
		return this.getToken(JustfileParser.RightBrace, 0);
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_conditionBlock;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterConditionBlock) {
	 		listener.enterConditionBlock(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitConditionBlock) {
	 		listener.exitConditionBlock(this);
		}
	}
}


export class FunctionLeftContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(JustfileParser.LeftParen, 0);
	}
	public ShellSetting(): TerminalNode {
		return this.getToken(JustfileParser.ShellSetting, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_functionLeft;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterFunctionLeft) {
	 		listener.enterFunctionLeft(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitFunctionLeft) {
	 		listener.exitFunctionLeft(this);
		}
	}
}


export class FunctionRightContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RightParen(): TerminalNode {
		return this.getToken(JustfileParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_functionRight;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterFunctionRight) {
	 		listener.enterFunctionRight(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitFunctionRight) {
	 		listener.exitFunctionRight(this);
		}
	}
}


export class FunctionValueContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionLeft(): FunctionLeftContext {
		return this.getTypedRuleContext(FunctionLeftContext, 0) as FunctionLeftContext;
	}
	public functionRight(): FunctionRightContext {
		return this.getTypedRuleContext(FunctionRightContext, 0) as FunctionRightContext;
	}
	public sequence(): SequenceContext {
		return this.getTypedRuleContext(SequenceContext, 0) as SequenceContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_functionValue;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterFunctionValue) {
	 		listener.enterFunctionValue(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitFunctionValue) {
	 		listener.exitFunctionValue(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionValue(): FunctionValueContext {
		return this.getTypedRuleContext(FunctionValueContext, 0) as FunctionValueContext;
	}
	public BACKTICK(): TerminalNode {
		return this.getToken(JustfileParser.BACKTICK, 0);
	}
	public INDENTED_BACKTICK(): TerminalNode {
		return this.getToken(JustfileParser.INDENTED_BACKTICK, 0);
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
	public stringValue(): StringValueContext {
		return this.getTypedRuleContext(StringValueContext, 0) as StringValueContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(JustfileParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(JustfileParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_value;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Comm(): TerminalNode {
		return this.getToken(JustfileParser.Comm, 0);
	}
	public sequence(): SequenceContext {
		return this.getTypedRuleContext(SequenceContext, 0) as SequenceContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_sequence;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterSequence) {
	 		listener.enterSequence(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitSequence) {
	 		listener.exitSequence(this);
		}
	}
}


export class RecipeContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recipeName(): RecipeNameContext {
		return this.getTypedRuleContext(RecipeNameContext, 0) as RecipeNameContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(JustfileParser.Colon, 0);
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
	public itemDocumentation(): ItemDocumentationContext {
		return this.getTypedRuleContext(ItemDocumentationContext, 0) as ItemDocumentationContext;
	}
	public attributes_list(): AttributesContext[] {
		return this.getTypedRuleContexts(AttributesContext) as AttributesContext[];
	}
	public attributes(i: number): AttributesContext {
		return this.getTypedRuleContext(AttributesContext, i) as AttributesContext;
	}
	public At(): TerminalNode {
		return this.getToken(JustfileParser.At, 0);
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public variadic(): VariadicContext {
		return this.getTypedRuleContext(VariadicContext, 0) as VariadicContext;
	}
	public dependency_list(): DependencyContext[] {
		return this.getTypedRuleContexts(DependencyContext) as DependencyContext[];
	}
	public dependency(i: number): DependencyContext {
		return this.getTypedRuleContext(DependencyContext, i) as DependencyContext;
	}
	public LogicalAND(): TerminalNode {
		return this.getToken(JustfileParser.LogicalAND, 0);
	}
	public body(): BodyContext {
		return this.getTypedRuleContext(BodyContext, 0) as BodyContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_recipe;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterRecipe) {
	 		listener.enterRecipe(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitRecipe) {
	 		listener.exitRecipe(this);
		}
	}
}


export class RecipeNameContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_recipeName;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterRecipeName) {
	 		listener.enterRecipeName(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitRecipeName) {
	 		listener.exitRecipeName(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(JustfileParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(JustfileParser.RightBracket, 0);
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_attributes;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterAttributes) {
	 		listener.enterAttributes(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitAttributes) {
	 		listener.exitAttributes(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(JustfileParser.LeftParen, 0);
	}
	public stringValue(): StringValueContext {
		return this.getTypedRuleContext(StringValueContext, 0) as StringValueContext;
	}
	public RightParen(): TerminalNode {
		return this.getToken(JustfileParser.RightParen, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_attribute;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterAttribute) {
	 		listener.enterAttribute(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitAttribute) {
	 		listener.exitAttribute(this);
		}
	}
}


export class ParameterNameContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(JustfileParser.NAME, 0);
	}
	public Dollar(): TerminalNode {
		return this.getToken(JustfileParser.Dollar, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_parameterName;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterParameterName) {
	 		listener.enterParameterName(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitParameterName) {
	 		listener.exitParameterName(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameterName(): ParameterNameContext {
		return this.getTypedRuleContext(ParameterNameContext, 0) as ParameterNameContext;
	}
	public Equal(): TerminalNode {
		return this.getToken(JustfileParser.Equal, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_parameter;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
}


export class VariadicModifierContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Star(): TerminalNode {
		return this.getToken(JustfileParser.Star, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(JustfileParser.Plus, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_variadicModifier;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterVariadicModifier) {
	 		listener.enterVariadicModifier(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitVariadicModifier) {
	 		listener.exitVariadicModifier(this);
		}
	}
}


export class VariadicContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variadicModifier(): VariadicModifierContext {
		return this.getTypedRuleContext(VariadicModifierContext, 0) as VariadicModifierContext;
	}
	public parameter(): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, 0) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_variadic;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterVariadic) {
	 		listener.enterVariadic(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitVariadic) {
	 		listener.exitVariadic(this);
		}
	}
}


export class DependencyContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public recipeName(): RecipeNameContext {
		return this.getTypedRuleContext(RecipeNameContext, 0) as RecipeNameContext;
	}
	public LeftParen(): TerminalNode {
		return this.getToken(JustfileParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(JustfileParser.RightParen, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_dependency;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterDependency) {
	 		listener.enterDependency(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitDependency) {
	 		listener.exitDependency(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rawBlocks(): RawBlocksContext {
		return this.getTypedRuleContext(RawBlocksContext, 0) as RawBlocksContext;
	}
	public commandBlocks(): CommandBlocksContext {
		return this.getTypedRuleContext(CommandBlocksContext, 0) as CommandBlocksContext;
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_body;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterBody) {
	 		listener.enterBody(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitBody) {
	 		listener.exitBody(this);
		}
	}
}


export class RawBlocksContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDENT_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.INDENT);
	}
	public INDENT(i: number): TerminalNode {
		return this.getToken(JustfileParser.INDENT, i);
	}
	public SheBangLine(): TerminalNode {
		return this.getToken(JustfileParser.SheBangLine, 0);
	}
	public Line_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.Line);
	}
	public Line(i: number): TerminalNode {
		return this.getToken(JustfileParser.Line, i);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(JustfileParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_rawBlocks;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterRawBlocks) {
	 		listener.enterRawBlocks(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitRawBlocks) {
	 		listener.exitRawBlocks(this);
		}
	}
}


export class CommandBlocksContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDENT_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.INDENT);
	}
	public INDENT(i: number): TerminalNode {
		return this.getToken(JustfileParser.INDENT, i);
	}
	public Line_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.Line);
	}
	public Line(i: number): TerminalNode {
		return this.getToken(JustfileParser.Line, i);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(JustfileParser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(JustfileParser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_commandBlocks;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterCommandBlocks) {
	 		listener.enterCommandBlocks(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitCommandBlocks) {
	 		listener.exitCommandBlocks(this);
		}
	}
}


export class InterpolationContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DoubleLeftBrace(): TerminalNode {
		return this.getToken(JustfileParser.DoubleLeftBrace, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DoubleRightBrace(): TerminalNode {
		return this.getToken(JustfileParser.DoubleRightBrace, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_interpolation;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterInterpolation) {
	 		listener.enterInterpolation(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitInterpolation) {
	 		listener.exitInterpolation(this);
		}
	}
}


export class StringValueContext extends ParserRuleContext {
	constructor(parser?: JustfileParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(JustfileParser.STRING, 0);
	}
	public INDENTED_STRING(): TerminalNode {
		return this.getToken(JustfileParser.INDENTED_STRING, 0);
	}
	public RAW_STRING(): TerminalNode {
		return this.getToken(JustfileParser.RAW_STRING, 0);
	}
	public INDENTED_RAW_STRING(): TerminalNode {
		return this.getToken(JustfileParser.INDENTED_RAW_STRING, 0);
	}
    public get ruleIndex(): number {
    	return JustfileParser.RULE_stringValue;
	}
	public enterRule(listener: JustfileParserListener): void {
	    if(listener.enterStringValue) {
	 		listener.enterStringValue(this);
		}
	}
	public exitRule(listener: JustfileParserListener): void {
	    if(listener.exitStringValue) {
	 		listener.exitStringValue(this);
		}
	}
}
