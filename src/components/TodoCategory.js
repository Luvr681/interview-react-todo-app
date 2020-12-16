import React from 'react'
import { observer } from 'mobx-react-lite'

import category from '../store/categories'

export const TodoCategory = observer( ({ setActiveType, type, cat, num }) => {
  if (cat.value === 'all' || cat.value === 'complition')
    return null

	const changeActive = id => {
		category.setActive(id)
		setActiveType(category.categories.find(cat => cat.id === id).value)
	}

	return (
    <div className="todo__category">
      <input onChange={() => changeActive(cat.id)} className="form-check-input" type="radio" name="flexRadioDefault" id={ `flexRadioDefault${num}` } />
      &nbsp;
      <label className="form-check-label" htmlFor={ `flexRadioDefault${num}` }>
        { cat.title }
      </label>
    </div>	
	)
} )
