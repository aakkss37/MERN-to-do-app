import React from 'react'
import { toggleTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

const TodoList = (props) => {
	const dispatch = useDispatch();
	return (
		<li className='task' onClick={() => { dispatch(toggleTodo(props.id))}}>
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