<!--
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-14 12:39:33
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 20:52:27
 * @FilePath: /geek-admin/src/router/grouter/RouterView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <component :is="comp"></component>
</template>

<script setup>
import {computed} from 'vue'
import { useRouter } from './index.js'

let router = useRouter()

const comp = computed(() => {
    const route =router.routes.find((route) => {
        return route.path === router.current.value
    })
    return route ? route.component : null
})
</script>