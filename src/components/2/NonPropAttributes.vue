<template>
  <input type="date" class="control" />
</template>

<script>
export default {
  inheritAttrs: false,
  //   参考：https://cn.vuejs.org/v2/guide/components-props.html#%E7%A6%81%E7%94%A8-Attribute-%E7%BB%A7%E6%89%BF
  //   没有声明的属性，默认自动挂载到组件根元素上，在子组件中设置`inheritAttrs`为`false`可以关闭自动挂载，

  //   注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定。
}
</script>

<style scoped>
.control {
  border: 2px green solid;
}
.dark {
  border: 2px red solid;
  background-image: url("../../assets/backImg.jpg");
  opacity: 0.5;
}
</style>>
