<template>
  <div>
    <span>
      {{ counter }}
      <button @click="changeFatherProp1">子件直接修改1</button>
      <br />
      {{ counter }}
      <button @click="changeFatherProp2">非直接修改2</button>
      <br />
      {{ counter }}
      <button @click="changeFatherProp3">非直接修改3</button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function,
      default: () => { }
    },
    initialCounter: {
      type: String
    },
    changeFatherProp2: {
      type: Function,
    }
  },
  data: function () {
    return {
      //  这里使用的是 data property将initialCounter作为其初始值，也可以使用计算属性，计算属性和这里有什么区别呢？
      // 当你使用这里的属性，修改initialCounter之后counter并不会在计算一遍，而计算属性每次调用都会计算一遍，因为计算属性强调的的是counter对initialCounter的依赖关系，只要依赖有所改变他都会重新计算一边

      // counter: this.initialCounter
      // 注意不能同时使用变量属性和计算属性，会重复定义
    }
  },
  computed: {
    counter: function () { return this.initialCounter }
  },
  methods: {
    changeFatherProp1: function () {
      //  此处直接在子组件中修改了父组件传来的属性，会报错，不过以来修改了父组件传来的属性
      this.initialCounter = "HuiDT1";

      // 如果你非要修改但不想报错怎么办呢？请参考Props.vue中的写法
      // 用一个函数onChange，它在父组件中定义并且传到子组件中，然后调用发生在子组件中
      // 这样的方法我看来可行

      // 再或者使用$emit触发一个事件直接在父组件中调用一个函数修改属性，如下changeFatherProp3
    },
    changeFatherProp3: function (e) {
      this.$emit("change", e.target.value);
    }
  }
}
</script>

<style>
</style>