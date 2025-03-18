/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 12:27:50
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:02:11
 * @FilePath: /geek-admin/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index.js'
import Store from './store/index.js'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
const app = createApp(App)
    .use(Store)
    .use(Router)
    .use(Element3)


// 这里设置 app.config 相关配置
app.config.devtools = true

app.mount('#app')
