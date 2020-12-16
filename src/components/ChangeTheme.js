import React from 'react'

export const ChangeTheme = () => {
	const changeTheme = () => {
		document.body.classList.toggle('darken')
	}

	return <button onClick={() => changeTheme()} type="button" className="theme btn btn-success">Сменить тему</button>	
}