/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 12:38:11
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-14 12:35:00
 * @FilePath: /geek-admin/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import {createRouter, createWebHashHistory} from 'vue-router'
import {createRouter, createWebHashHistory} from './grouter/index.js'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component:  Home
    },
    {
        path: '/about',
        name: 'About',
        component:  About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router