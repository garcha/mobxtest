import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./todoStore"
import TodoList from "./todoList"

const app = document.getElementById("app")

ReactDOM.render(<TodoList store={store}/>, app)
