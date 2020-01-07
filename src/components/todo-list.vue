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
import {mapGetters} from 'vuex'

export default {
  components: {
    TodoItem,
  },
  computed: mapGetters(['getTodos'])
}
</script>

<style lang="css">
</style>
