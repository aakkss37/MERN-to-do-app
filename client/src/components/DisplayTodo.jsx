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
	// console.log(allTodos);
	const todoList = allTodos.map((todo)=>(
		<TodoList 
			key={todo._id}
			data={todo.data}
		/>
	))
	// console.log(todoList)

	return (
		<article>
			<ul>
				{todoList}
			</ul>
		</article>
	)
}

export default DisplayTodo;