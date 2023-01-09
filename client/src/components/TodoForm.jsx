import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';


const TodoForm = () => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()

	const onFormSubmit = (event) => {
		event.preventDefault();
		dispatch(addNewTodo(input))
		setInput('')
	}

	const inputChangeHandler = (e) => {
		setInput(e.target.value);
	}

	return (
		<div>
			<form className='form' onSubmit={onFormSubmit}>
				<input
					placeholder='Enter new task...'
					className='input'
					onChange={inputChangeHandler}
					value={input}
				/>
			</form>
		</div>
	)
}

export default TodoForm
