<template>
  <div>
    <div class="class1">
      <slot name="moren1" v-bind:user="dynamicUser"></slot>
    </div>
    <div class="class2">
      <slot name="moren2" v-bind:user="dynamicUser"></slot>
    </div>
    <div class="class3">
      <slot name="moren3" v-bind:user="dynamicUser"></slot>
    </div>

    <br />
    DynamicSlotName中的<code>[插槽名]</code> 会被作为一个表达式动态求值
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
        name1: "动态插槽名",
      }
    }
  },
}
</script>

<style scoped>
.class1 {
  background-color: aqua;
}
.class2 {
  background-color: pink;
}
.class3 {
  background-color: rgb(84, 156, 224);
}
</style>