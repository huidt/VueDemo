<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">E 结点</h3>
    <button @click="handleClick">改变color为green</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: {
    theme: {
      default: () => ({})
    }
  },
  methods: {
    handleClick () {
      if (this.theme.changeColor) {
        //   这里changeColor not undefined
        this.theme.changeColor("green");
      } else {
        console.log("changeColor() is not undefined，\n所以不能变为绿色");
      }
    }
  }
};
</script>
