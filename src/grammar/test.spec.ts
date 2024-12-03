import { basename } from 'path';
import { CharStream } from 'antlr4';
import { describe, it } from "vitest";
import { getRecipes, parseJustfile } from '.';
import { globSync } from 'glob';
import { readFileSync } from 'fs';
import * as assert from 'assert';
import JustfileLexer from './JustfileLexer';

describe("Test JustfileLexer", () => {
    it("Parse backstick", () => {
        const justfile = `version := \`sed -En 's/version[[:space:]]*=[[:space:]]*"([^"]+)"/v\\1/p' Cargo.toml\``;

        const lexer = new JustfileLexer(new CharStream(justfile));

        const tokens = lexer.getAllTokens()

        for (let index = 0; index < tokens.length; index++) {
            const element = tokens[index];
            // console.log(element.text, element.line, element.column)
        }
    })

    it("Parse Tokens", () => {
        const justfile = `a:
    echo a
first:
    echo first:one
second:
    echo second:two

`;

        const lexer = new JustfileLexer(new CharStream(justfile));

        const tokens = lexer.getAllTokens()

        for (let index = 0; index < tokens.length; index++) {
            const element = tokens[index];
            // console.log(element.text, element.line, element.column)
        }
    })
})

describe("Test JustfileParser", () => {
    it("should parse3", () => {
        const justfile = `a:
    echo a
first:
    echo first:one
second:
    echo second:two

`;
        const tree = parseJustfile(justfile, { checkSyntaxErrors: true });
        assert.equal(tree.exception, null);
        const recipes = getRecipes(tree);

        // recipes?.forEach((r) => {
        //     console.log(getRecipeName(r))
        // })

        tree.item_list().forEach((c) => {
            assert.equal(c.exception, null);

            // console.log(justfile.substring(c.start.start, c.stop?.stop));            
        });

        assert.equal(recipes?.length, 3);
    });

    it("assignment", () => {
        const lines = [`bcc := "
        hello\t
         world
        "`,
            'abc := "\t"',
            "aa := \"\"\"\nsdasd \n asda\"\"\"",
            "ab := \"\\\r\n\"",
            `x := '''
          foo
          bar
        '''`,
            `y := """
          abc
            wuv
          xyz
        """
`,
        ]
        const justfile = lines.join("\n");

        const tree = parseJustfile(justfile);

        tree.item_list()?.forEach((c) => {
            assert.equal(c.exception, null);
        });

        assert.equal(tree.item_list().length, lines.length);
    })
    it("setting", () => {
        const justfile = `set dotenv-load := true
set allow-duplicate-recipes
`;
        const tree = parseJustfile(justfile);

        tree.item_list().forEach((c) => {
            assert.equal(c.exception, null);
        });
        assert.equal(tree.item_list().length, 2);
    })
    it("commnet", () => {
        const justfile = `# 12aaaa
set dotenv-load := true
`;

        const tree = parseJustfile(justfile);
        tree.item_list().forEach((c) => {
            assert.equal(c.exception, null);
        });
    })
    it("expr", () => {
        const justfile = `shebang := if os() == 'windows' {
'powershell.exe'
} else {
'/usr/bin/env pwsh'
}
`;

        const tree = parseJustfile(justfile);

        tree.item_list()?.forEach((c) => {
            assert.equal(c.exception, null);
        });
    })

    it("should parse", () => {
        const justfile = `bcc := "hello world"

# 125
abc:
    -@echo "hello world"

    @echo "hello world2"

# saaa
def c="a" : abc
    #!/bin/bash
    
    echo "00"
`;

        const tree = parseJustfile(justfile, { checkSyntaxErrors: true });

        assert.equal(-1, JustfileLexer.EOF);
        assert.equal(tree.exception, null);

        const recipes = getRecipes(tree);
        assert.equal(recipes?.length, 2);
        assert.equal(recipes[0].start.line, 3);
        assert.equal(recipes[1].start.line, 9);

        // tree.item_list().forEach((c) => {
        //     assert.equal(c.exception, null);
        //     // console.log(justfile.substring(c.start.start, c.stop?.stop)); 
        // });
    });

    it("should parse2", () => {
        const justfile = `set dotenv-load := true
set windows-shell := ["pwsh.exe", "-NoLogo", "-Command"]

aa := "aaa"

bbb := """aaa
 0"""

cc := 'aaa "bb"'

default:
    just --version
`;

        const tree = parseJustfile(justfile);
        assert.equal(tree.exception, null);
        const recipes = getRecipes(tree);

        tree.item_list().forEach((c) => {
            assert.equal(c.exception, null);

            // console.log(justfile.substring(c.start.start, c.stop?.stop));            
        });

        assert.equal(recipes?.length, 1);
    });


    describe("Parse just-repo", () => {
        const justfiles = globSync('example/just-repo/*.just',)

        justfiles.forEach((justfilePath, i) => {

            const justfile = readFileSync(justfilePath, 'utf8');

            it(`expamle: ${basename(justfilePath)}`, () => {
                const tree = parseJustfile(justfile);
                tree.item_list().forEach((item) => {
                    assert.equal(item.exception, null);
                });
                assert.equal(tree.exception, null);
            });
        });
    });
});