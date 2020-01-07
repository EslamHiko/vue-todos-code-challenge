import Vue from 'vue'
import Vuex from 'vuex'
import Todo from './modules/Todo'
Vue.use(Vuex)

import VuexORM from '@vuex-orm/core'

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(Todo)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
