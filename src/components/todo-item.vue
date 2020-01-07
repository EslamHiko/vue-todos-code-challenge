<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ todo.title }}</h3>
      </div>
    </v-card-title>
    <v-btn @click="toggleComplete">
      {{ !todo.done ? 'complete' : 'uncomplete' }}
    </v-btn>
    <v-btn
      @click="removeToDo"
      color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import todosController from '@/controllers/todosController'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type:Number,
      required:true
    }
  },
  methods: {
    /**
     * Passing the Id of the Todo to mark it as completed or remove the mark
     * @return {Boolean}  True if it was a successful operation
     */
    toggleComplete() {
      return todosController.toggleCompleteTodo(this.todo.id)
    },
    /**
     * Passing the Id of the Todo to remove it
     * @return {Boolean}  True if it was a successful operation
     */
    removeToDo() {
      return todosController.removeTodo(this.todo.id)
    }
  }
}
</script>

<style lang="css">
</style>
