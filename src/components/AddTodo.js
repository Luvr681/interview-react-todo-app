import React from 'react'
import { observer } from 'mobx-react-lite'

import todo from '../store/todo'
import category from '../store/categories'
import { TodoCategory } from './TodoCategory'

export const AddTodo = observer( () => {
  const [title, setTitle] = React.useState('')
  const [type, setType] = React.useState('personal')

  const submitHandler = (event) => {
    event.preventDefault()

    if (title.trim()) 
      todo.addTodo({ title, id: Date.now(), completed: false, type })
    setTitle('')
  }

  return (
    <form className="todo__form" onSubmit={submitHandler}>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Добавьте задачу</label>
        <input value={title} onChange={event => setTitle(event.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>

      <div className="todo__categories">
        {
          category.categories.map((cat, index) => {
            return <TodoCategory type={type} setActiveType={setType} num={index + 1} cat={cat} key={cat.id} />
          })
        }
      </div>

      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  )
} )
