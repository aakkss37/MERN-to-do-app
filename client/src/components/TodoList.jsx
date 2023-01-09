import React from 'react'

const TodoList = (props) => {
	return (
		<li className='task'>
			<span>{props.data}</span>
			<span className='icon'>
				<i className='fas fa-trash'/>
			</span>
			<span className='icon'>
				<i className='fas fa-pen'/>
			</span>
		</li>
	)
}

export default TodoList