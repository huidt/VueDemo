<template>
  <div>
    <img class="img1" src="../../assets/huidt.jpg" alt="author" />
    <img class="img2" src="../../assets/huidt.jpg" alt="author" />
    <img class="img3" src="../../assets/huidt.jpg" alt="author" />
  </div>
</template>

<script>
export default {
  props: {
    // imgSrc: {
    //   type: String,
    // }
  }
}
</script>

<style scoped>
img {
  width: 100px;
  background: #eee;
}
.img1 {
  clip-path: circle(50%);
}
.img2 {
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>