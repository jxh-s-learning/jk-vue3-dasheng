/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-18 21:34:06
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 21:40:55
 * @FilePath: /jk-vue3-dasheng/src/components/Todo.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(props) {
        let title = ref('')
        let todos = ref([{title: '学习vue3', done: true}, {title: '睡觉', done: false}])

        function addTodo() {
            todos.value.push({
                title: title.value
            })
            title.value = ''
        }

        return () => <div>
            <input type="text" vModel={title.value}/>
            <button onClick={addTodo}>click</button>
            <ul>
                {
                    todos.value.length ? todos.value.map(todo => {
                        return <li>{todo.title}</li>
                    }) : <li> no data </li>
                }
            </ul>
        </div>
    }
})