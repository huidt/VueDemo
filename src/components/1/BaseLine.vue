<template>
  <div id="container">
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "default"
    }
  }
}
</script>

<style  scoped>
#container {
  margin: 2px 0 10px 0;
  display: block;
  line-height: 8px;
  font-size: 6px;
  background-color: rgb(219, 191, 152);
  padding: 0px;
}
div {
  padding: 0 12px;
  margin: 0;
  line-height: 8px;
  font-family: "Times New Roman", Times, serif;
  display: inline;
  border-color: white;
  background-color: white;
}
</style>