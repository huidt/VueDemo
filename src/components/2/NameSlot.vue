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
      <slot name="xiaoting" v-bind:nameSlotUser="nameSlotUser">
        <!-- {{ user.name }}
      {{ user.school }} -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nameSlotUser: {
        name: "小婷同学",
        school: "HFUT"
      }
    }
  },
  props: {

  }
}
</script>

<style>
</style>