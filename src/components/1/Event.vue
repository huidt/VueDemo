<template>
  <div>
    name:{{ name || "--" }}
    <br />
    <input :value="name" @change="handleChange" />
    <br />
    <div @click="handleDivClick">
      <!-- button的click事件会冒泡到div上 -->
      <button @click="handleClick">RESET成功</button> &nbsp;
      <!-- 组织冒泡，所以重置失败 -->
      <button @click.stop="handleClick">RESET失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: {
      type: String
    },
    onEventChange: {
      type: Function,
      default: () => { }
    }
  },
  methods: {
    handleChange (e) {
      this.$emit("change", e.target.value);
    },
    handleDivClick () {
      this.$emit("change", "");
    },
    // 上面两个函数都会触发change事件，一个是文本改变导致的，一个是点击重置导致的

    handleClick () {
      // e.stopPropagation();
    }
  }
}
</script>

<style>
</style>