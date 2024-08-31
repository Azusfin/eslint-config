import * as Stegripe from "./stegripe/index.js"

export { browser, common, edge, modules, node, prettier, ignores, extend } from "./stegripe/index.js"

export const stylistic = Stegripe.extend(Stegripe.stylistic, [
    {
        rule: "stylistic/member-delimiter-style",
        option: [
            "warn",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: false
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false
                }
            }
        ]
    },
    {
        rule: "stylistic/semi",
        option: "off"
    },
    {
        rule: "stylistic/type-annotation-spacing",
        option: [
            "warn",
            {
                before: true,
                after: true,
                overrides: {
                    colon: {
                        before: false,
                        after: true
                    }
                }
            }
        ]
    }
], true)

export const typescript = Stegripe.extend(Stegripe.typescript, [
    {
        rule: "typescript/consistent-type-definitions",
        option: ["error", "interface"]
    },
    {
        rule: "typescript/explicit-member-accessibility",
        option: [
            "error",
            {
                accessibility: "explicit",
                overrides: {
                    constructors: "no-public"
                }
            }
        ]
    },
    {
        rule: "typescript/member-ordering",
        option: "off"
    },
    {
        rule: "typescript/naming-convention",
        option: [
            "warn",
            {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "forbid",
                trailingUnderscore: "forbid"
            },
            {
                selector: "enumMember",
                format: ["PascalCase"]
            },
            {
                selector: "import",
                format: ["camelCase", "PascalCase"]
            },
            {
                selector: "parameter",
                format: ["camelCase"],
                modifiers: ["unused"],
                leadingUnderscore: "allow"
            },
            {
                selector: "property",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "allowSingleOrDouble"
            },
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"]
            }
        ]
    },
    {
        rule: "typescript/sort-type-constituents",
        option: "off"
    }
], true)
