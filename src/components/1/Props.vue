<template>
  <div style="{ color: props.checked ? 'red' : 'blue' }">
    name：{{ name }} <br />
    type：{{ type }}
    <slot name="prefixTcon" v-bind="{ checked }"></slot>
    <input type="checkbox" v-model="checked" />
    <br />
    list：{{ list }} <br />
    isVisible：{{ isVisible }} <br />
    <button @click="handleClick">change type</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  inheritAttrs: false,
  name: "PropsDemo",
  props: {
    name: String,
    type: {
      validator: function (value) {
        return ["success", "warning", "danger"].includes(value);
      }
    },
    list: {
      type: Array,
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => { }
    }
  },
  methods: {
    handleClick () {
      //  避免在子组件中直接修改父组件中的值
      // this.type = 'warning'
      this.onChange(this.type === "success" ? "warning" : "success");
      // this.$emit('delete');
    }
  }
}
</script>

<style>
</style>