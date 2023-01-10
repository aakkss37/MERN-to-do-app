import React, {useState} from 'react'
import { toggleTodo } from '../redux/actions'
import { useDispatch } from 'react-redux'

const TodoList = (props) => {
	const [editTask, setEditTask] = useState(false);
	const [editedInput, setEditedInput] = useState(props.data);
	const dispatch = useDispatch();

	const listClass = `task  ${props.done && "taskDone"}`
	console.log(props)
	return (
		<li 
			className={listClass} 
			onClick={() => { dispatch(toggleTodo(props.id))}}
		>

				{
					!editTask ? 
					<span>{props.data}</span>  : 
					<form>
						<input type="text" value={editedInput} className="editTodoInput" onChange={(e)=>{setEditedInput(e.target.value)}}/>
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