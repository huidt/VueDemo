<template>
  <div>
    name:{{ name || "--" }}
    <br />
    <input :value="name" @change="handleChange" />
    <br />
    <div id="Eventdiv" @click="handleDivClick">
      <!-- button的click事件会冒泡到div上 -->
      <button @click="handleClick">RESET成功</button>
      <!-- 阻止冒泡，所以重置失败 -->
      <button @click.stop="handleClick">RESET失败</button>
    </div>
    <blockquote>
      RESET成功和失败按钮的区别在于失败按钮阻止了冒泡，所以它的click事件不会被父级div捕获，也就不会RESET
      <br />
      这里没有把name的值和input的value做双向绑定，为什么？
      因为vue中应该避免直接更改父组件传来的prop，因为每当父组件重新渲染时，该值都会被覆盖。而是使用基于属性值的数据或计算属性。回过来说如何直接更改而让vue不报错？需要传入函数到父组件中在父组件中调用该函数就可以避免报错（借助$emit）
    </blockquote>
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
      // do nothing
    }
  }
}
</script>

<style scoped>
#Eventdiv {
  margin: 2px;
  border: 2px red solid;
  display: inline-block;
}
button {
  margin: 4px 1px;
}
</style>