<template>
  <span>
    <slot v-bind:user="user2" name="CurrentUserDemo">
      <!-- {{ user.lastName }} -->
    </slot>
  </span>
</template>

<script>
export default {
  data () {
    return {
      user2: {
        firstName: "T",
        lastName: "HuiD"
      }
    }
  }
}
</script>

<style>
</style>