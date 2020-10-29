<template>
  <div>
    <slot v-bind:user="dataDestr"></slot>
    <slot name="otherSlot"></slot>
    对于子组件插槽传来的值，父组件中可以设置默认值，当子组件没有传值时就启用
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataDestr: {
        midName: "YAMAuiDT",
        info: "nothing"
      }
    }
  }
}
</script>

<style>
</style>