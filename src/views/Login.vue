<template>
  <div>
    <h2>登录界面</h2>
    <button @click="addToken">添加token</button>
    <button @click="deleteToken">删除token</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: "这是令牌"
    }
  },
  methods: {
    deleteToken: function () {
      if (window.localStorage.getItem("token")) {
        localStorage.removeItem('token');
        console.log("删除token");
      }
    },
    addToken: function () {
      //   console.log(window.localStorage.getItem("token"));
      if (!window.localStorage.getItem("token")) {
        window.localStorage.setItem("token", JSON.stringify(this.token));
        console.log("添加token");
      }
    }
  }
}
</script>

<style>
</style>