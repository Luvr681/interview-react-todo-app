import { makeAutoObservable } from 'mobx'

class Todo {
  todos = [
    { id: 1, title: 'Сделать работу', completed: false, type: 'work' },
    { id: 2, title: 'Зайти в магазин', completed: false, type: 'personal' },
    { id: 3, title: 'Подучить JS', completed: false, type: 'learn' },
  ]

  constructor() {
    makeAutoObservable(this) 
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  toggleTodo(id, date) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, key: date, completed: !todo.completed } : todo) 
  }
}

export default new Todo()
