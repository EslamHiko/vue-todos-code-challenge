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
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    submitToDo() {
      if(this.title.length)
        this.addTodo(this.title)
      else
        return alert('please enter a title !')
      this.title = ''
    }
  }
}
</script>

<style lang="css">
</style>
