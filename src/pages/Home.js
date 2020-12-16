import React from 'react'

import { TodoList } from '../components/TodoList'
import { AddTodo } from '../components/AddTodo'
import { SortTodo } from '../components/SortTodo'

export const Home = () => {
  const [type, setType] = React.useState('personal')
  return (
    <div className="home">
      <h1>Todo app</h1>
      <AddTodo />
      <div className="container">
        <SortTodo setType={setType} />
        <TodoList type={type} />
      </div>
    </div>
  )
}
