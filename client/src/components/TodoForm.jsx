import React, { useState } from 'react'

const TodoForm = () => {
	const [input, setInput] = useState('')

	const onFormSubmit = (event) => {
		event.preventDefault();
		setInput('')
	}

	const inputChangeHandler = (e) => {
		setInput(e.target.value);
	}
	console.log(input)
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
