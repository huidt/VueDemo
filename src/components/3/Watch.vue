<template>
  <div>
    <h2>侦听属性</h2>
    <!--$data：Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象 property 的访问。 -->
    {{ $data }}
    <br />
    <button @click="() => (a += 1)">a+1</button>
    <br />
    由于改变了a，触发监听器，执行函数，也就改变了$data
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function (val, oldVal) {
      console.log(this);
      this.b.c += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.c": function (val, oldVal) {
      this.b.d += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.d": function (val, oldVal) {
      this.e.f.g += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    e: {
      handler: function (val, oldVal) {
        this.h.push("😄");
        console.log("new: %s, old: %s", val, oldVal);
      },
      //   这里的deep什么意思？改变的是e.f.g，想要外层的e监听到，就必须使用deep，此时e对象下面所有的属性都会被监听
      deep: true
    },
    h (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  }
};
</script>
