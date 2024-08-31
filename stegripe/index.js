export { browser } from "./conf/browser.js"
export { common } from "./conf/common.js"
export { edge } from "./conf/edge.js"
export { ignores } from "./conf/ignores.js"
export { modules } from "./conf/modules.js"
export { node } from "./conf/node.js"
export { prettier } from "./conf/prettier.js"
export { stylistic } from "./conf/stylistic.js"
export { typescript } from "./conf/typescript.js"

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
