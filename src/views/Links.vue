<template>
  <div id="links">
    <h3>Author's Email:<a href="mailto:huidt@qq.com"> YAMA </a></h3>
    <br />

    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
    <clip-path-1> </clip-path-1>
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
      huidtSrc1: `../../assets/huidt.jpg`,
      huidtSrc2: `../assets/huidt.jpg`,
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