import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  createNew(e){
    if(e.which === 13){
      this.props.store.createTodo(e.target.value)
      e.target.value = ''
    }
  }

  fil(e){
    this.props.store.fil = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render(){
    const { clearComplete, fil, filteredTodos, todos } = this.props.store
    console.log(filteredTodos)
    const todoList = filteredTodos.map(todo => (
      <li key={todo.id}>
      <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />{todo.value}</li>
    ))
    return(
      <div>
        <h1>Todos</h1>
        <input className="create" onKeyPress={this.createNew.bind(this)} />
        <input className="filter" value={fil} onChange={this.fil.bind(this)}/>
        <ul>{todoList}</ul>
        <a href="#" onClick={clearComplete}> clearComplete</a>
      </div>
    )
  }
}

export default TodoList;
