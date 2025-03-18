/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-18 22:11:45
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:42:06
 * @FilePath: /jk-vue3-dasheng/src/api/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 20000) {
            console.log('借口信息报错', res.message)
            return Promise.reject(new Error(res.message || 'Error'))
        } 
        return res
    },
    error => {
        console.log('借口信息报错'+error)
        return Promise.reject(error)
    }
)

export default service