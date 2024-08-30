import confBrowser from "./conf/browser.js"
import confCommon from "./conf/common.js"
import confEdge from "./conf/edge.js"
import confIgnores from "./conf/ignores.js"
import confModules from "./conf/modules.js"
import confNode from "./conf/node.js"
import confPrettier from "./conf/prettier.js"
import confStylistic from "./conf/stylistic.js"
import confTypescript from "./conf/typescript.js"

export const browser = confBrowser
export const common = confCommon
export const edge = confEdge
export const ignores = confIgnores
export const modules = confModules
export const node = confNode
export const prettier = confPrettier
export const stylistic = confStylistic
export const typescript = confTypescript

/**
 * @param {import("eslint").Linter.Config[]} config - eslint config
 * @param {{ rule: string, option: ["off" | "warn" | "error", object] }[]} rulesAndOptions - rules and options to extend
 * @param {boolean} replace - replace existing options
 * @returns {import("eslint").Linter.Config[]}
 * @example extend(config, [{ rule: "no-console", option: ["warn", { allow: ["warn", "error"] }] }])
 */
export function extend(config, rulesAndOptions, replace = false) {
    return config.map(c => {
        if (c.rules) {
            for (const { rule, option } of rulesAndOptions) {
                if (replace) {
                    c.rules[rule] = option
                } else {
                    const oldOption = c.rules[rule]
                    c.rules[rule] = [
                        option[0], Array.isArray(oldOption) ? { ...oldOption[1], ...option[1] } : option[1]
                    ]
                }
            }
        }
        return c
    })
}
