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