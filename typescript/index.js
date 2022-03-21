/* eslint-env node */
const { resolve } = require("path")

module.exports = {
    extends: [resolve(__dirname, "..", "index.js"), resolve(require.resolve("@rahagia/eslint-config/typescript"))],
    rules: {
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            accessibility: "explicit",
            overrides: {
                constructors: "no-public"
            }
        }],
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid"
        }, {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE"]
        }, {
            selector: "typeLike",
            format: ["PascalCase"]
        }, {
            selector: "property",
            format: ["camelCase", "UPPER_CASE"],
            leadingUnderscore: "allowSingleOrDouble"
        }, {
            selector: "parameter",
            format: ["camelCase"],
            modifiers: ["unused"],
            leadingUnderscore: "allow"
        }, {
            selector: "enumMember",
            format: ["PascalCase"]
        }],
        "@typescript-eslint/member-delimiter-style": ["warn", {
            multiline: {
                delimiter: "none",
                requireLast: false
            },
            singleline: {
                delimiter: "semi",
                requireLast: false
            }
        }],
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/sort-type-union-intersection-members": "off",
        ...require(resolve(__dirname, "..", "index.js")).rules
    }
}
