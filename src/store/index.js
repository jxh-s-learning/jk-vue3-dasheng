/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-13 12:10:13
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-13 12:51:03
 * @FilePath: /geek-admin/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from "./gvuex.js"

const store = createStore({
    state() {
        return {
            count: 667
        }
    },
    getters: {
        double(state) {
            return state.count *2
        }   
    },
    actions: {
        asyncAdd({commit}) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    }
})

export default store