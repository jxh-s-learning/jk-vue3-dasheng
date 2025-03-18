/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 12:27:50
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 21:29:04
 * @FilePath: /jk-vue3-dasheng/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
})
