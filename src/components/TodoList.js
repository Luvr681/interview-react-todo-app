import React from 'react'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'

import { TodoItem } from './TodoItem'

export const TodoList = observer( ({ type }) => {
  const getTodo = () => todo.getTodoByType(type)
  const [todos, setTodos] = React.useState(getTodo())

  React.useEffect(() => {
    setTodos(getTodo())
  }, [todo.todos.length, type])
  
  const onToggle = id => {
    todo.toggleTodo(id)
    setTodos(getTodo())
  }

  const onRemove = id => {
    todo.removeTodo(id)
    setTodos(getTodo())
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
