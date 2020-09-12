<template>
  <div>
    当在父组件中的<code>template</code>中提供了内容时Submit将不会被渲染出来，<br />如果没有提供就将后备内容渲染出来

    <br />
    <button type="submit">
      <slot>Submit</slot>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>