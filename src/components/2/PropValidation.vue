<template>
  <div>
    propA:{{ propA }}
    <br />
    propB:{{ propB }}
    <br />
    propC:{{ propC }}
    <br />
    propD:{{ propD }}
    <br />
    propE:{{ propE }}
    <br />
    propF:{{ propF }}
    <br />
    propG:{{ propG }}
    <br />
    propH:{{ propH }}
  </div>
</template>

<script>
export default {
  props: {
    propA: Number,
    // 多个可能的类型，也可以把二者拼接起来
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      // 表示必填
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    propG: {
      type: Array,
      default: () => []
    },
    propH: {
      type: Function,
      default: () => { }
    }
  }
}
</script>

<style>
</style>