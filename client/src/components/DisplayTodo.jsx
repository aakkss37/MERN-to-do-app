import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../redux/actions';


const DisplayTodo = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(getAllTodos());
	},[]);
	

	const allTodos = useSelector(state=> state.todos);
	// console.log(allTodos);
	const todoList = allTodos.map((todo)=>(
		<li>{todo.data}</li>
	))
	console.log(todoList)

	return (
		<article>
			<ol>
				{todoList}
			</ol>
		</article>
	)
}

export default DisplayTodo;