<template>
  <div class="SlotDemo">
    <slot />
    <!-- 匿名插槽，或者说默认插槽 -->
    <slot name="title" />
    <slot name="item" v-bind="obj" />
  </div>
</template>

<script>
export default {
  name: "SlotDemo",
  data () {
    return {
      obj: {
        value: 'vue',
        name: "TianTian"
      }
    }
  }
}
</script>

<style>
.SlotDemo {
  border: 1px pink solid;
}
</style>