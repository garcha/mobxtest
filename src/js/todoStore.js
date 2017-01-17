import { computed, observable } from "mobx"

class Todo {
  @observable value
  @observable id
  @observable completed

  constructor(value) {
    this.id = Date.now()
    this.value = value
    this.completed = false
  }
}

class TodoStore {
  @observable todos = []
  @observable fil = ""
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.fil, "i")
    return this.todos.filter(todo => !this.fil || matchesFilter.test(todo.value))
  }

  createTodo(value){
    this.todos.push(new Todo(value))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }
}

var store = window.store = new TodoStore

export default store
