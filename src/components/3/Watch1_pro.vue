<template>
  <div>
    <h2>防抖版</h2>
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
      lastName: "Bar",
      fullName: "Foo Bar"
    };
  },
  watch: {
    firstName: function (val) {
      //  不停地输入就会不停的清空定时器，所以他就一直不会改变数据，只有当你延迟大于500ms后才会更新
      clearTimeout(this.firstTimeout);
      this.firstTimeout = setTimeout(() => {
        this.fullName = val + " " + this.lastName;
      }, 500);
    },
    lastName: function (val) {
      clearTimeout(this.lastTimeout);
      this.lastTimeout = setTimeout(() => {
        this.fullName = this.firstName + " " + val;
      }, 500);
    },
    fullName: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  }
};
</script>
