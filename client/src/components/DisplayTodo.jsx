import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../redux/actions';
import TodoList from './TodoList';


const DisplayTodo = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getAllTodos());
	},[dispatch]);
	

	const allTodos = useSelector(state=> state.todos);
	const todoList = allTodos.map((todo)=>(
		<TodoList 
			key={todo._id}
			id={todo._id}
			data={todo.data}
			done={todo.done}
		/>
	))
	// console.log(todoList)

	return (
		<article className='todoListContainer'>
			<ul>
				{todoList}
			</ul>
		</article>
	)
}

export default DisplayTodo;