<template>
  <ul>
    <li v-for="todo in filteredTodos" v-bind:key="todo.id">
      <slot name="todo" v-bind:todo="todo">
        这里是后备内容：{{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      filteredTodos: [{
        text: "n1", id: 1, isComplete: true
      }, {
        text: "n2", id: 2, isComplete: false
      }, {
        text: "n3", id: 3, isComplete: true
      }, {
        text: "n4", id: 4, isComplete: false
      }],
    }
  }
}

</script>

<style scoped>
ul {
  border: 2px pink dashed;
}
li {
  list-style: none;
}
</style>