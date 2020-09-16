<template>
  <div>
    <h2>计算属性</h2>
    <p>Reversed message1: "{{ reversedMessage1 }}"</p>
    <p>Reversed message2: "{{ reversedMessage2() }}"</p>
    <p>{{ now }}</p>
    <!-- vm.$forceUpdate()迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。 -->
    <!-- 当它强制重新渲染回导致reversedMessage2执行 -->
    <button @click="() => $forceUpdate()">forceUpdate</button>
    <br />
    <input v-model="message" />
    <br />
    可以发现这里forceUpdate只会执行reversedMessage2，因为它是方法，
    <br />
    而reversedMessage1是计算属性，只会在依赖数据改变时重新计算
  </div>
</template>
<script>
export default {
  data () {
    return {
      //  响应式写法
      message: "hello vue"
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage1: function () {
      console.log("执行reversedMessage1计算属性");
      // 只要当计算属性依赖的数据发生变化就会执行计算
      return this.message
        .split(" ")
        .reverse()
        .join(" ");
    },
    now: function () {
      return Date.now();
    }
  },
  methods: {
    //   这里的函数当模板更新世会执行这个函数
    reversedMessage2: function () {
      console.log("执行reversedMessage2方法");
      return this.message
        .split(" ")
        .reverse()
        .join(" ");
    }
  }
};
</script>
