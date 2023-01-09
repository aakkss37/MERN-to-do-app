import axios from 'axios';
import { Add_New_Todo } from './dispatchType.js';
const API_URL = 'http://localhost:8000';

export const addNewTodo = (data)=> async(dispatch)=> { //---> thid dispatch is comming from thunk
	try {
		const responce = await axios.post(`${API_URL}/todo`, {data: data});
		dispatch({type: Add_New_Todo, payload: responce.data})
	} catch (error) {
		console.log("Error while calling addTodo API ----> ",error.message)
	}
}