<template>
  <div>
    {{ fullName }}

    <div>firstName: <input v-model="firstName" /></div>
    <div>lastName: <input v-model="lastName" /></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      firstName: "Foo",
      lastName: "Bar"
    };
  },
  computed: {
    fullName: function () {
      // 一旦fullName所依赖的数据其中一个改变了就会重新计算
      return this.firstName + " " + this.lastName;
    }
  },
  watch: {
    fullName: function (val, oldVal) {
      // 这一步只是为了在控制台打印，可删除
      console.log("new: %s, old: %s", val, oldVal);
    }
  }
};
</script>
