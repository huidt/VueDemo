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