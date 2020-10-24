<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      v-bind:value="$attrs.placeholder"
      v-on:input="$emit('input', $event.target.value)"
    />
    {{ value }}
    <blockquote>这里的value和input标签的value一样吗？不一样</blockquote>
  </label>
</template>
// $attrs：包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
// 当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，
// 并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
// 意思就是：`$attrs` 可以收集父组件中的所有传过来的属性除了那些在组件中没有通过 props 定义的。
<script>

export default {
  inheritAttrs: false,
  props: ['label', 'value'],
}
</script>

<style></style>
