<template>
  <div style="{ color: props.checked ? 'red' : 'red' }">
    name：{{ name }} <br />
    type：{{ type }}
    <slot name="prefixTcon" v-bind="{ checked }"></slot>
    <input type="checkbox" v-model="checked" />
    <br />
    list：{{ list }} <br />
    isVisible：{{ isVisible }} <br />
    <button @click="handleClick">change type</button>
    <blockquote>
      type最开始从父组件传过去的时danger，change type会变为warning或success
      <br />
      这里边对父组件传给子组件的值进行了一个validator验证，这是个好习惯，如果数据验证错误则会报错：
      [Vue warn]: Invalid prop: custom validator check failed for prop "type".
    </blockquote>
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
    // 传来的onChange如下
    //  onChange (val) {
    //   this.type = val;
    // },
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