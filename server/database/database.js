import mongoose from "mongoose";
mongoose.set('strictQuery', false)
var options = {
	useNewUrlParser: true, useUnifiedTopology: true
};
const Connection = async()=>{
	const MONGODB_URL = "mongodb+srv://mern-todo-app:mern-todo-app@mern-to-do.oro2wus.mongodb.net/?retryWrites=true&w=majority";
	mongoose.connect(MONGODB_URL, options);
	
	mongoose.connection.on('connected', ()=>{
		console.log("Database Connected Sucessfully");
	});
	mongoose.connection.on('disconnected', ()=>{
		console.log("Database disconnected");
	});
	mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
};


export default Connection;