<template>
  <!-- <a v-bind:href="url" class="nav-link">
    这里 :href="url"会报错？为什么？
    参考：https://cn.vuejs.org/v2/guide/components-slots.html#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F
  </a> -->
  <div>
    <slot v-bind:url="url"></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'www.thdong.top',
      user: {
        name: "NavigationLink's Name"
      }
    }
  }
}

console.warn("NavigationLink这里最初是报错的：Property or method 'url' is not defined on the instance but referenced during render ，后来在子组件中使用v-bind:url='url'把url传递上去才不会报错");
</script>

<style scoped>
div {
  background-color: rgb(151, 206, 187);
  border: 3px solid pink;
}
</style>