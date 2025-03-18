<!--
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-14 12:43:58
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-14 12:45:01
 * @FilePath: /geek-admin/src/router/grouter/RouterLink.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a :href="'#' + props.to"> <slot /> </a>
</template>
<script setup>
import {defineProps} from 'vue' 
let props = defineProps({to:{type:String,required:true} })
</script>
