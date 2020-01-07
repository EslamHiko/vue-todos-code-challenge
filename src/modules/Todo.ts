// Todo Model
import { Model } from '@vuex-orm/core'

class Todo extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'todos'

  // attributes types
  public id!:number;
  public title!:string;
  public done!:boolean;

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.increment(),
      title: this.attr(''),
      done: this.attr(0)
    }
  }




}

export default Todo
