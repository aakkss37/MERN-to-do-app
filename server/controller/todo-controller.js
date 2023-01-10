import Todo from "../models/todoModel.js";


export const addTodo = async(request, responce)=>{
	try {
		const newTodo = await Todo.create({
			data: request.body.data,
			createdAt: Date.now(),
			done: false
		});
		// console.log("new Todo entry ------> ",newTodo)
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

export const toggleTodo = async(request, responce)=>{
	try {
		// console.log("Task to be Toggled -----> ",request.params.id)
		const responceToBeToggeled = await Todo.findById(request.params.id);
		console.log("before toggle -----> ", responceToBeToggeled);
		const responceAfterToggle = await Todo.findOneAndUpdate(
			{_id: request.params.id},
			{ done: !responceToBeToggeled.done}
		)
		console.log("responce after togle --------> ",responceAfterToggle)
		await responceAfterToggle.save();
		return responce.status(200).json(responceAfterToggle);
	} catch (error) {
		return responce.status(500).json(error.message)
	}
} 