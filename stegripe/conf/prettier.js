import prettierConfig from "eslint-config-prettier"
import { ignores } from "./ignores.js"

/** @type {import("eslint").Linter.Config[]} */
export const prettier = [
    {
        name: "stegripe/prettier",
        ignores: ignores[0].ignores,
        rules: {
            ...prettierConfig.rules
        }
    }
]
