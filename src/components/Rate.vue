<!--
 * @Author: zyjxh 765802997@qq.com
 * @Date: 2025-03-12 20:35:20
 * @LastEditors: zyjxh 765802997@qq.com
 * @LastEditTime: 2025-03-18 22:37:49
 * @FilePath: /geek-admin/src/components/Rate.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :style="fontstyle">
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits,computed, ref, watch} from 'vue'

let props = defineProps({
//   value: Number,
  modelValue: Number,
  theme: {
    type: String,
    default: "orange",
  },
})
// let rate = computed(() =>
//   "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
// )

const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
}

const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})

let width = ref(props.modelValue)

function mouseOver(i) {
  width.value = i
}

function mouseOut() {
  width.value = props.modelValue
}
const fontwidth = computed(() => `width:${width.value}em;`)

// let emits = defineEmits('update-rate')
let emits = defineEmits(['update:modelValue'])
function onRate(num) {
    emits('update:modelValue', num)
}

watch(() => props.modelValue, (newValue) => {
  width.value = newValue
})
</script>
<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
