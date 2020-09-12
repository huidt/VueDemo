<template>
  <span>
    <slot v-bind:user="user2" name="CurrentUserDemo">
      此处当子件中的插槽名与父件中的template的name属性不对应时，会渲染后备内容
      <br />
      <blockquote>后备内容： {{ user2.fullname }}</blockquote>
    </slot>
  </span>
</template>

<script>
export default {
  data () {
    return {
      user2: {
        firstName: "T",
        lastName: "HuiD",
        fullname: "HuiDT"
      }
    }
  }
}
</script>

<style>
</style>