<template>
  <div>
    <div>组件结构如下图</div>
    <img
      width="80%"
      src="../../assets/跨组件通信.png"
      alt="http://img.wandouip.com/crawler/article/2019424/7d0ee2c13140b1ea06c81fcfdd47f219"
    />
    <blockquote>
      在A节点中提供（provide）了color，然后在 E、F、I 节点中通过inject接收
    </blockquote>
    <ChildrenA1 />
    <hr />
    <ChildrenA />
  </div>
</template>
<script>
import ChildrenA from "./ChildrenA";
import ChildrenA1 from "./ChildrenA_a";
export default {
  components: {
    ChildrenA,
    ChildrenA1
  }
};
</script>
<style>
.border,
.border1,
.border2 {
  border: 4px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  display: inline-block;
  border-color: rgb(100, 100, 100);
  width: 25%;
}
.border2 {
  display: inline-block;
  border-color: rgb(200, 200, 200);
}
</style>
