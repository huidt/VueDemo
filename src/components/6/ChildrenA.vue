<template>
  <div class="border">
    <h1 :style="{ color: color }">A 结点</h1>
    <button @click="() => changeColor()">改变color</button>
    <br />
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
// import Vue from "vue";
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },

  //   ②使用Vue.observable，像ChildrenA_a.vue组件那样
  //   provide () {
  //     this.theme = Vue.observable({
  //       color: "blue"
  //     });
  //     return {
  //       theme: this.theme
  //     };
  //   },
  provide () {
    return {
      theme: {
        color: this.color
      }
    };
  },
  //   ①直接提供this，this下面会挂载data、props、theme、color等等
  //   provide () {
  //     return {
  //       theme: this
  //     };
  //   },

  data () {
    return {
      color: "blue"
      //   此时这里的color并不是响应式的，改变值并不会反映到provide提供的数据中去
      //   有两种解决方法
    };
  },
  methods: {
    changeColor (color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    },
  }

  //   methods: {
  //     changeColor (color) {
  //       if (color) {
  //         this.theme.color = color;
  //       } else {
  //         this.theme.color = this.theme.color === "blue" ? "red" : "blue";
  //       }
  //     }
  //   }
};
</script>