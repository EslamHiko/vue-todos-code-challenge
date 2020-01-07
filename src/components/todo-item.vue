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
import { mapActions } from 'vuex'

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
    ...mapActions(['removeTodo'
  ,'toggleCompleteTodo']),
    toggleComplete(e) {
      this.toggleCompleteTodo(this.index)
    },
    removeToDo(e) {
      this.removeTodo(this.index)

    }
  }
}
</script>

<style lang="css">
</style>
