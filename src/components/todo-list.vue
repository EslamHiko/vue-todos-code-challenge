<template lang="html">
  <div>
    <TodoItem
      v-for="(todo,index) in getTodos"
      :index="index"
      :todo="todo"
      :key="todo.id"
      class="mb-3" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import todosController from '@/controllers/todosController'

export default {
  components: {
    TodoItem,
  },
  computed: {
    /**
     * Fetching Todo list from vuex and storing it in getTodos variable
     * @return {Array} List of All Todos
     */
    getTodos() {
      return todosController.getTodos()
    }
  }
}
</script>

<style lang="css">
</style>
