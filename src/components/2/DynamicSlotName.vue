<template>
  <div>
    <slot v-bind:user="dynamicUser"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dynamicUser: {
        name: "OU"
      }
    }
  }
}
</script>

<style>
</style>