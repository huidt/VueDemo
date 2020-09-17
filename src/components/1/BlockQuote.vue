<template>
  <div>
    <blockquote>
      <slot></slot>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    str: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>
</style>