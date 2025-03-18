/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-14 12:22:58
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-14 12:50:12
 * @FilePath: /geek-admin/src/router/grouter/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {ref, inject} from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = '__router__'

function createRouter(options) {
    return new Router(options)
}

function useRouter() {
    return inject(ROUTER_KEY)
}

function createWebHashHistory() {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'
    }
}

class Router {
    constructor(options) {
        this.history = options.history
        this.routes =options.routes
        this.current = ref(this.history.url)

        this.history.bindEvents(() => {
            this.current.value =window.location.hash.slice(1)
        })
    }

    install(app) {
        app.provide(ROUTER_KEY, this)
        app.component("router-link",RouterLink)
        app.component("router-view",RouterView)
    }
}

export{createRouter, createWebHashHistory, useRouter}