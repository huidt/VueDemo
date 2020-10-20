<template>
  <div>
    <span>
      {{ counter }}
      <button @click="changeFatherProp1">子直接修改1</button>
      <blockquote>
        此处直接在子组件中修改了父组件传来的属性，vue会报错，不过也确实修改了改prop在子组件中的值，父组件中没有改变
      </blockquote>
      <blockquote>想一想为什么不让在子组件中直接修改？</blockquote>
      <br />
      {{ counter }}
      <button @click="changeFatherProp2">非直接修改2</button>
      <br />
      {{ counter }}
      <button @click="changeFatherProp31">非直接修改3</button>
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
      //   此处直接在子组件中修改了父组件传来的属性，vue会报错，不过也确实修改了改prop在子组件中的值，父组件中没有改变
      this.initialCounter = "HuiDT1";
      //   想一想为什么不让在子组件中直接修改？

      //   如果你非要修改但不想报错怎么办呢？请参考Props.vue中的写法
      //   用一个函数onChange，它在父组件中定义并且传到子组件中（实际上传来的只是一个引用，用为JS函数是对象），然后假装调用发生在子组件中，实质上函数在父组件中被调用

      //   组件是可复用的 Vue 实例，就是对象

      //   这样的方法我看来可行

      //   再或者使用$emit触发一个事件直接在父组件中调用一个函数修改属性，如下changeFatherProp31
    },
    changeFatherProp31: function (e) {
      //   这里的函数和父组件中的同名函数没有关系
      this.$emit("change", e.target.value);
    }
  }
}
</script>

<style>
</style>