import axios from 'axios';
import { Add_New_Todo, Get_All_Todo, Toggle_Todo, Update_Todo } from './dispatchType.js';
const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => { //---> thid dispatch is comming from thunk
	try {
		const responce = await axios.post(`${API_URL}/todo`, { data: data });
		// console.log(" adding new Todo -----> ",responce.data)
		dispatch({ type: Add_New_Todo, payload: responce.data })
	} catch (error) {
		console.log("Error while calling addTodo API ----> ", error.message)
	}
}

export const getAllTodos = () => async (dispatch) => {
	try {
		const responce = await axios.get(`${API_URL}/todo`);
		dispatch({ type: Get_All_Todo, payload: responce.data })
		// console.log("getAllTodo ----> ",responce.data)
	} catch (error) {
		console.log("Error while calling getAllTodo API ----> ", error.message);
	}
}

export const toggleTodo = (id) => async (dispatch) => {
	try {
		// console.log("clicked --->",id)
		const responce = await axios.get(`${API_URL}/todo/${id}`);
		// console.log("Toggle resp -----> ", responce.data)
		dispatch({ type: Toggle_Todo, payload: responce.data })
	} catch (error) {
		console.log("Error while calling toggleTodo API ----> ", error.message);
	}
}


export const updateTodo = (data, id) => async(dispatch)=>{
	try {
		console.log("updated todo -----> ", data, "\nid-----> ", id)
		const responce = await axios.post(`${API_URL}/todo/${id}/update`, { data: data })
		dispatch({type: Update_Todo, payload: responce.data })
	} catch (error) {
		console.log("Error while calling UpdateTodo API ----> ", error.messsage);
	}
}