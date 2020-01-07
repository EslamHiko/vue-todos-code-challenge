import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import Todo from './modules/Todo'

Vue.config.productionTip = false

// Inserting Dump Todos
const todos = [{title:'todo1',done:false},{title:'todo 2',done:true}];
Todo.insert({data:todos});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
