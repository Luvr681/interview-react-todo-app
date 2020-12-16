import React from 'react'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'

import { TodoItem } from './TodoItem'

export const TodoList = observer( ({ type }) => {
  const sortTodo = () => type === 'all' ? todo.todos : todo.todos.filter(todo => todo.type === type)

  const [todos, setTodos] = React.useState(sortTodo())

  React.useEffect(() => {
    if (type === 'complition') { 
      setTodos(todos => todo.todos.filter(todo => todo.completed))
    } else {
      setTodos(todos => sortTodo())
    }
  }, [todo.todos.length, type])
  
  const onToggle = id => {
    todo.toggleTodo(id)
    setTodos(todos => {
      return type === 'all' ? todo.todos : todo.todos.filter(todo => todo.type === type)
    })
  }

  const onRemove = id => {
    todo.removeTodo(id)
    setTodos(todos => {
      return type === 'all' ? todo.todos : todo.todos.filter(todo => todo.type === type)
    })
  }

  return (
    <ul className="todo__list">
      {
      	todos.length 
      	? todos.map((todo, index) => {
          return <TodoItem onRemove={onRemove} onToggle={onToggle} index={index} key={todo.id} t={todo} />
        })
        : <p>Таких задач нет!</p>
      }
    </ul>
  )
} )
