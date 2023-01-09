import React from 'react'

const TodoList = (props) => {
	return (
		<li>
			<span>{props.data}</span>
			<span>
				<i className='fas fa-trash'/>
			</span>
			<span>
				<i className='fas fa-pen'/>
			</span>
		</li>
	)
}

export default TodoList