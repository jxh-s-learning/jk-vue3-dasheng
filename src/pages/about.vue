<!--
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 12:43:41
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:41:23
 * @FilePath: /geek-admin/src/pages/about.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        about
    </div>
    <h1 @click="toggle">click</h1>
    <Rate v-model="score" @update-rate="update"></Rate>
    <div @click="add">{{ count }}</div>
    <div> {{double}} </div>
    <div @click="addAsync">{{ "addasync" }}</div>
    <Heading :level="3"> hello geekbang</Heading>
    <Todo />
</template>
<script setup>
import { computed, ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import Rate from '../components/Rate.vue'
import Heading from '../components/Heading.jsx'
import Todo from '../components/Todo.jsx'

import { useStore } from '../store/gvuex.js'
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)
function add() {
    store.commit('add')
}
function addAsync() {
    store.dispatch('asyncAdd')
}

let score = ref(3.5)
function update(num) {
    score.value = num
}
const { toggle } = useFullscreen()
</script>