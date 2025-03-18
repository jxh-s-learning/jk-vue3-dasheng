/*
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-18 21:21:42
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 21:31:25
 * @FilePath: /jk-vue3-dasheng/src/components/Heading.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, h } from "vue";

export default defineComponent({
    props: {
        level: {
            type: Number,
            require: true
        }
    },
    setup(props, { slots }) {
        // return () => h(
        //     'h' + props.level,
        //     {},
        //     slots.default()
        // )
        const tag = 'h' + props.level
        return () => <tag>{slots.default()}</tag>
    }
})