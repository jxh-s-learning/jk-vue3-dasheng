<!--
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 19:26:11
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:40:01
 * @FilePath: /geek-admin/src/components/TodoList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
  </div>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import {useTodos} from '../utils/utils.js'
let count = ref(1)
let color = ref('red')
function add() {
    count.value++
    color.value = Math.random() > 0.5 ? 'blue' : 'red'
}

let { title, todos, addTodo, clear, active, all, allDone } = useTodos()

</script>

<style lang="scss" scoped>
$padding: 10px;
$white: #fff;
ul {
  width: 500px;
  margin: 0 auto;
  padding: 0;
  li {
    &:hover {
      cursor: pointer;
    }
    list-style-type: none;
    margin-bottom: $padding;
    background: $white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
