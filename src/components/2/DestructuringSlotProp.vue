<template>
  <div>
    <slot v-bind:user="dataDestr"></slot>
    <slot name="otherSlot"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataDestr: {
        midName: "YAMAuiDT"
      }
    }
  }
}
</script>

<style>
</style>