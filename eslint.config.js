/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-18 22:28:26
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:44:04
 * @FilePath: /jk-vue3-dasheng/eslint.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import globals from "globals"
import pluginJs from "@eslint/js"
import pluginVue from "eslint-plugin-vue"


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {
      'semi': ['error', 'never'], // 禁用分号
      "vue/multi-word-component-names": "off", //不检测多单词
    }
  }
]