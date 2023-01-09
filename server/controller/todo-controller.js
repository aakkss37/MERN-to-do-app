import Todo from "../models/todoModel.js";


export const addTodo = async(request, responce)=>{
	try {
		const newTodo = await Todo.create({
			data: request.body.data,
			createdAt: Date.now(),
		});
		await newTodo.save();

		return responce.status(200).json(newTodo);
	} catch (error) {
		console.log("error from addtodo controller ----> ", error.message);
		return responce.status(500).json(error.message);
	}
}


export const fetchAllTodos = async(request, responce)=>{
	try {
		const allTodos = await Todo.find({}).sort({'createdAt': -1});
		return responce.status(200).json(allTodos);
	} catch (error) {
		return responce.status(500).json(error.message)
	}
}