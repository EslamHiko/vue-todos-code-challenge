
interface Todo {
  id: number
  title: string
  done: boolean
}

const state = {
  todos: [{id:1,title:'todo1',done:false},{id:2,title:'todo 2',done:true}]
}
const getters = {
  getTodos: (state: any) => state.todos
}
const actions = {
  addTodo: async (commitObj: any,title: string) => {
    if(title){
      let todo = {title: title,done:0}
      commitObj.commit('addTodo',todo)
    }
  },
  removeTodo: async (commitObj: any,index: number) => {
    commitObj.commit('removeTodoByIndex',index)
  },
  toggleCompleteTodo: async (commitObj: any,index: number) => {
    commitObj.commit('toggleCompleteTodoByIndex',index)
  },
}

const checkForDuplicateTodoIds = (rnd: number) => {
  for(let todo of state.todos){
    if(todo.id == rnd)
      return true;
  }
  return false;
}

const mutations = {
  addTodo: async (state: any,todo: Todo) => {
    var rnd = Math.floor(1000 + Math.random() * 9000);
    while(checkForDuplicateTodoIds(rnd))
      rnd = Math.floor(1000 + Math.random() * 9000);
    todo.id = rnd;

    state.todos.unshift(todo);
  },
  removeTodoByIndex: async (state:any, index: number) => {
    state.todos.splice(index,1)
  },
  toggleCompleteTodoByIndex: async (commitObj: any,index: number) => {
    const todo = state.todos[index];
    if(todo !== undefined)
      todo.done = !todo.done;
    state.todos[index] = todo;
  },
}

export default  {
  state,getters,actions,mutations
}
