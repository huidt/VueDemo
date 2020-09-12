<template>
  <span>
    <slot v-bind:girl="girl">
      <blockquote>
        后备内容：<a
          href="https://cn.vuejs.org/v2/guide/components-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95"
          >独占默认插槽的缩写语法</a
        >
      </blockquote>
    </slot>
    <slot name="other"></slot>
  </span>
</template>
  

<script>
export default {
  data () {
    return {
      girl: {
        totalHeigh: "168cm"
      }
    }
  }
}
</script>

<style>
</style>