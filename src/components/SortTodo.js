import React from 'react'
import { observer } from 'mobx-react-lite'

import categories from '../store/categories'

export const SortTodo = observer( ({ setType }) => {
	return (
		<div className="todo__change btn-group" role="group" aria-label="Basic example">

			{
				categories.categories.map(category => {
					return <button key={category.id} onClick={() => setType(category.value)} type="button" className="todo__change__btn btn btn-primary">{ category.title }</button>
				})
			}

		</div>
	)
} )
