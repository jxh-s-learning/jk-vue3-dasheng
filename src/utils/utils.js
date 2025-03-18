/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 19:40:43
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:36:07
 * @FilePath: /geek-admin/src/components/useTodos.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, computed, watchEffect, watch } from 'vue'
export function useTodos() {
    let title = ref("")
    let todos = useStorage('todos', [])

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ""
    }   

    function clear() {
        todos.value = todos.value.filter(v => !v.done)
    }

    let active = computed(() => {
        return todos.value.filter(v => v.done).length
    })

    let all = computed(() => todos.value.length)

    let allDone = computed({
        get: function() {
            return active.value === 0
        },
        set: function(value){
            todos.value.forEach(todo => {
                todo.done = value
            })
        }
    })

    return { title, todos, addTodo, clear, active, all, allDone }
}

export function useStorage(name, value=[]) {
    let data = ref(JSON.parse(localStorage.getItem(name)) || value)

    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}

export function useFavicon( newIcon ) {
    const favicon = ref(newIcon)

    const updateIcon = (icon) => {
        document.head.querySelectorAll(`link[rel*="icon"]`).forEach(el => el.href = `${icon}`)
    }

    const reset = () => favicon.value = '/favicon.ico'

    watch( favicon, (i) => updateIcon(i))

    return {favicon, reset}
}