<template>
  <!-- <a v-bind:href="url" class="nav-link">
    这里 :href="url"会报错？为什么？
    参考：https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F
  </a> -->
  <div>
    一个不带 name 的 slot
    出口会带有隐含的名字“default”。这就是默认插槽，也叫匿名插槽
    <br />
    <slot v-bind:url="url"></slot>

    <blockquote>
      NavigationLink这里最初是报错的：Property or method 'url' is not defined on
      the instance but referenced during render
      ，后来在子组件中使用v-bind:url='url'把url传递上去才不会报错
    </blockquote>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'yama.thdong.top:8080/dist',
      user: {
        name: "NavigationLink's Name"
      }
    }
  }
}

</script>

<style scoped>
div {
  background-color: rgb(151, 206, 187);
  border: 3px solid pink;
}
</style>