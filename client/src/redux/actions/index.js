import axios from 'axios';
import { Add_New_Todo, Get_All_Todo } from './dispatchType.js';
const API_URL = 'http://localhost:8000';

export const addNewTodo = (data)=> async(dispatch)=> { //---> thid dispatch is comming from thunk
	try {
		const responce = await axios.post(`${API_URL}/todo`, {data: data});
		dispatch({type: Add_New_Todo, payload: responce.data})
	} catch (error) {
		console.log("Error while calling addTodo API ----> ",error.message)
	}
}

export const getAllTodos = ()=> async(dispatch)=>{
	try {
		const responce = await axios.get(`${API_URL}/todo`);
		dispatch({type: Get_All_Todo, payload: responce.data})
		// console.log("getAllTodo ----> ",responce.data)
	} catch (error) {
		console.log("Error while calling getAllTodo API ----> ", error.message);
	}
}