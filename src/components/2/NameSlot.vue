<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 下面是默认插槽，任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容 -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>

    <div>
      <slot name="xiaoting" v-bind:nameSlotUser2="nameSlotUser">
        后备内容
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nameSlotUser: {
        name: "小T同学",
        school: "HFUT"
      },
    }
  },
}
</script>

<style scoped>
</style>