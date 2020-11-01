<template>
  <div id="links">
    <h3>Author's Email:<a href="mailto:huidt@qq.com"> YAMA </a></h3>
    <br />
    <ClipPath1 :imgSrc="huidtSrc"></ClipPath1>
    <!-- <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" />
    <img src="../assets/huidt.jpg" /> -->
  </div>
</template>

<script>
import ClipPath1 from '../components/7/ClipPath1.vue'
export default {
  components: {
    ClipPath1
  },
  data () {
    return {
      //   huidtSrc: `../../assets/huidt.jpg`,
      huidtSrc: `../assets/huidt.jpg`,
    }
  }

}
</script>

<style  scoped>
img {
  width: 200px;
}
img:hover {
  width: 202px;
}
#links {
  margin-top: 20vh;
}
</style>