<template>
  <ul>
    <li v-for="todo in filteredTodos" v-bind:key="todo.id">
      <!-- We have a slot for each todo, passing it the `todo` object as a slot prop. -->
      <slot name="todo" v-bind:todo="todo">
        <!-- Fallback content -->
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
        text: "n1", id: 1
      }, {
        text: "n2", id: 2
      }, {
        text: "n3", id: 3
      }, {
        text: "n4", id: 4
      }],
    }
  }
}

</script>

<style>
</style>