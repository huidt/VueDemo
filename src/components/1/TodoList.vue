<template>
  <li>
    <input type="checkbox" v-model="checked" />
    <slot name="prefixTcon" v-bind="{ checked }"></slot>
    <span>{{ item }}</span>
    <slot name="suffixTcon" v-bind="{ checked }"></slot>
    <button @click="handleClick">DELETE</button>
  </li>
</template>

<script> 
export default {
  data () {
    return {
      checked: true
    }
  },
  props: ['item'],
  //   item从使用该组件的地方传过来，'学习Vue属性', '学习Vue事件', '学习Vue插槽' 其中之一
  methods: {
    handleClick: function () {
      // console.log(this.item);
      this.$emit('delete', this.item);
    }
  }
}
</script>

<style scoped>
li {
  background-color: rgb(240, 241, 171);
}
</style>