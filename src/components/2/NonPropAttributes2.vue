<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      v-bind:value="$attrs.placeholder"
      v-on:input="$emit('input', $event.target.value)"
    />{{ value }}
    <blockquote>这里的value和input标签的value一样吗？不一样</blockquote>
  </label>
</template>

<script>

export default {
  inheritAttrs: false,
  props: ['label', 'value'],
}
</script>

<style></style>
