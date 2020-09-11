<template>
  <label>
    {{ label }}
    <!-- 这里直接v-on="xxx"是因为input元素默认的change事件会触发事件 -->
    <!-- 此处监听的inputListeners是一个对象，里面是监听的集合 -->
    <input v-bind="$attrs" v-bind:value="value" v-on="inputListeners" />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style>
</style>