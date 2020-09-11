<template>
  <li class="item">
    <input type="checkbox" v-model="checked" />
    <slot name="item" v-bind="{ checked }"></slot>
  </li>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      checked: false,
    }
  }
}
</script>

<style scoped>
.item {
  border: 2px red solid;
  margin: 2px;
  color: blueviolet;
}
</style>