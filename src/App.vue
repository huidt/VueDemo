<template>
  <div id="app">
    <ToTheBottom></ToTheBottom>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Login">Login</router-link>|
      <router-link to="/Jichu">基础测试</router-link> |
      <router-link to="/Zhongji">中级测试</router-link> |
      <router-link to="/links">Links</router-link>
    </div>
    <router-view />

    <hr style="bottom: 0" id="pagebottom" />
  </div>
</template>

<script>
import ToTheBottom from './components/1/ToTheBottom'


export default {
  components: {

    ToTheBottom,

  },
  name: 'App',
  data () {

    return {

    }
  },
  methods: {

  },
  computed: {


  },
  watch: {

  }
}

</script>

<style lang="stylus" scoped></style>
