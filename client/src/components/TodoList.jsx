import React, {useState} from 'react'
import { toggleTodo, updateTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

const TodoList = (props) => {
	const [editTask, setEditTask] = useState(false);
	const [updatedInput, setUpdatedInput] = useState(props.data);
	const dispatch = useDispatch();


	const formSubmitHandler = (e)=>{
		e.preventDefault();
		dispatch(updateTodo(updatedInput, props.id));
		setEditTask(false);
	}




	const listClass = `task  ${props.done && "taskDone"}`
	return (
		<li 
			className={listClass} 
			onClick={() => { dispatch(toggleTodo(props.id))}}
		>

				{
					!editTask ? 
					<span>{props.data}</span>  : 
					<form onSubmit={formSubmitHandler}>
						<input type="text" value={updatedInput} className="editTodoInput" onChange={(e)=>{setUpdatedInput(e.target.value)}}/>
					</form>
				}
				<div className='iconContainer'>
					<span className='icon'>
						<i className='fas fa-pen' onClick={()=>{setEditTask(prevState => !prevState) }}/>
					</span>
					<span className='icon'>
						<i className='fas fa-trash'/>
					</span>
				</div>

		</li>
	)
}

export default TodoList