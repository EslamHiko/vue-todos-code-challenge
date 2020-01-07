<template lang="html">
  <v-text-field
    @keyup.enter="submitToDo"
    v-model="title"
    label="Todo"
    placeholder="What do you have to do?"
    solo
  />
</template>

<script>
import todosController from '@/controllers/todosController'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    /**
     * Passing the title of a new Todo to addTodo in the todosController
     * @return {boolean} True if it was a successful Operation
     */
    submitToDo() {
      if(this.title.length){
         todosController.addTodo(this.title);
         this.title = '';
         return true;
    } else
        return alert('please enter a title !');

    }
  }
}
</script>

<style lang="css">
</style>
