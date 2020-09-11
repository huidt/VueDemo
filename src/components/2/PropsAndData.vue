/* eslint-disable prettier/prettier */
<template>
  <div>
    <p>props.name: {{ name }}</p>
    <p>props.info: {{ info }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <!-- <p>data.b: {{ b }}</p> -->
    <p>
      <button @click="handleBChange">change data.b</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "PropsAndData",
  props: {
    info: Object,
    name: String,
    list: Array
  },
  data () {
    return {
      a: "hello",
      b: "world"
    };
  },
  updated () {
    console.log("看到我我表示PropsAndData更新了");
  },
  methods: {
    handleBChange () {
      this.b = "vue" + Date.now();
      console.log(this.b);
      // 为什么b发生了变化却没有触发更新？
      // 因为b根本没有在页面中使用，所以它也没有自己的watcher，也不存在setter去notify watcher这回事
      console.log("data.b 发生了变化，但是并没有触发组件更新", this.b);
    }
  }
};
</script>
