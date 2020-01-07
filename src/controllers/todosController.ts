// Todo Controller
import Todo from '@/modules/Todo'

/**
 * getTodos Function to list all Todos in Desc order
 * @return a list of all Todos
 */
const getTodos = () => {

  return Todo.query().orderBy('id','desc').get();
}

/**
 * addTodo Function to add new Todos
 * @param  title The title of the Todo
 * @return       true if it was a successful operation
 */
const addTodo = async (title: string) => {
  if(title){
    let todo = {title: title,done:false}
    Todo.insert({data:todo});
    return true;
  }
  return false;
}

/**
 * removeTodo Function to remove Todos
 * @param  id Unique Todo Identifier
 * @return    True
 */
const removeTodo = async (id: number) => {
  Todo.delete(id);
  return true;
}

/**
 * Function to modify a Todo into completed or not
 * @param  id Unique Todo Identifier
 * @return    True if It was a successful operation
 */
const toggleCompleteTodo = async (id: number) => {
  let todo = Todo.find(id)
  if(todo){
    todo.done = !todo.done
    Todo.update({
      where: id,
      data: {
        ...todo
      }
    })
    return true;
  }
  return false;
}

export default {
  getTodos,
  addTodo,
  removeTodo,
  toggleCompleteTodo
}
