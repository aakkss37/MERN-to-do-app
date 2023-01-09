import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
	id: {
		type: String,
		requireed: true
	},
	data: {
		type: String,
		requireed: true
	},
	done: {
		type: Boolean,
		defaule: false
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;