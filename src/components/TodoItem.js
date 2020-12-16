import React from 'react'
import { observer } from 'mobx-react-lite'
import todo from '../store/todo'

export const TodoItem = observer( ({ t, onRemove, onToggle, index }) => {
  return (
    <li className='todo__item'>
    	<span className={ t.completed ? 'todo__title completed' : 'todo__title' }>
        <input 
          checked={t.completed} 
          onChange={() => onToggle(t.id)} 
          className="todo__input form-check-input" 
          type="checkbox" 
        />
	      <b>{ index + 1 }</b>
				<p>{ t.title }</p>
			</span>
			<strong className="todo__date">{ new Date().toLocaleDateString() }</strong>
      <button onClick={() => onRemove(t.id) } className="btn btn-danger todo__remove__button">&times;</button>
    </li>
  )
} ) 
