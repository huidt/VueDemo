<template>
  <div>
    <img v-bind:src="imgSrc" alt="" />
    {{ imgSrc }}
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>