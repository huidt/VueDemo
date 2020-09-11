<template>
  <div>
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    //   注意此处需要在props中声明checked
    checked: Boolean
  },
}
</script>

<style>
</style>