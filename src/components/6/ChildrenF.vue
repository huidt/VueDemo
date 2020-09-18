<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }">F 结点</h3>
    <h3 :style="{ color: theme.color }">
      F 结点<sub
        >(绿色，<br />
        由于theme命名冲突)</sub
      >
    </h3>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      theme: { color: "green" }
    }
  },
  // 坏的写法
  //   inject: {
  //     theme: {
  //       default: () => ({})
  //     }
  //   },

  //   好的写法
  inject: {
    theme1: {
      // 这里为什么要写成theme1？还有from
      from: "theme",
      //   这是因为当前的组件很多的东西都是挂载到this下面，这时候可能inject的theme可能会和本身theme（如果有的话）的有冲突，所以换个名字，但是别忘了from
      default: () => ({})
    }
  }

};
</script>
