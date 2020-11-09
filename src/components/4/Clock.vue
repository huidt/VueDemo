<template>
  <div>
    括号里是什么？（见控制台）→<code
      >（{{
        log("在\{\{\}\}中执行打印的：" + "render" + "\n所以视图中没有显示")
      }}）</code
    >
    这里的log就是console.log，在控制台处打印了render
    <br />
    这里是： <code>{{ now }}</code>
    <button @click="start = !start">{{ start ? "停止" : "开始" }}</button>
  </div>
</template>
<script>
import moment from "moment";
//A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
export default {
  data: function () {
    this.moment = moment;
    this.log = window.console.log;
    return {
      now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      start: false
    };
  },
  watch: {
    start () {
      this.startClock();
    }
  },
  beforeCreate () {
    console.log("beforeCreate");
  },
  created () {
    console.log("created");
  },
  beforeMount () {
    console.log("beforeMount");
  },
  mounted () {
    console.log("mounted");
    this.startClock();
  },
  beforeUpdate () {
    console.log("beforeUpdate");
  },
  updated () {
    console.log("updated");
  },
  beforeDestroy () {
    console.log("beforeDestroy");
    clearInterval(this.clockInterval);
  },
  destroyed () {
    console.log("destroyed");
  },
  methods: {
    startClock () {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        }, 1000);
      }
    }
  }
};
</script>
