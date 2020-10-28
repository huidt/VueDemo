<template>
  <div>
    <slot name="moren" v-bind:user="dynamicUser"></slot>
    <br />
    dynamicSlotName会被作为一个表达式动态求值
    同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：
    <a
      href="https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0"
      >动态参数</a
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      dynamicUser: {
        name: "mo_ren"
      }
    }
  }
}
</script>

<style>
</style>