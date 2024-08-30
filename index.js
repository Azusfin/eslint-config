import * as Stegripe from "./stegripe"

export { browser, common, edge, modules, node, prettier, ignores, extend } from "./stegripe"

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
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"]
            },
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "property",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "allowSingleOrDouble"
            },
            {
                selector: "parameter",
                format: ["camelCase"],
                modifiers: ["unused"],
                leadingUnderscore: "allow"
            },
            {
                selector: "enumMember",
                format: ["PascalCase"]
            }
        ]
    },
    {
        rule: "typescript/sort-type-constituents",
        option: "off"
    }
], true)
