<template>
  <div>
    倒计时组件
    <hr />
    <div v-show="startCount">
      <input v-model="countTime" placeholder="请输入倒计时（单位s）" />
      <button @click="startCount = !startCount">
        <!-- 其实此处的三元没必要，因为startCount为false时button就隐藏了 -->
        {{ startCount ? "开始" : "停止" }}
      </button>
    </div>
    <br />
    <div v-show="countTime != 0" class="hahaha">
      {{ "距离结束还有 " + countTime + " s" }}
    </div>
    <div id="hahaha" v-if="0 == countTime">结束，回家恰饭</div>
  </div>
</template>

<script>
// import moment from "moment";
export default {
  data () {
    return {
      countTime: undefined,
      startCount: true
    }
  },
  watch: {
    startCount () {
      this.startClock();
    }
  },
  methods: {
    startClock () {
      this.clockInterval = setInterval(() => {
        if (this.countTime == 1) clearInterval(this.clockInterval);
        this.countTime = this.countTime - 1;
      }, 1000);
    },
  }
}
</script>

<style scoped>
#hahaha {
  width: 200px;
  height: 30px;
  background-color: yellowgreen;
  margin: 0 auto;
}
.hahaha {
  width: 200px;
  height: 30px;
  background-color: rgb(226, 206, 24);
  margin: 6px auto;
}
</style>