/*		*****Enviornment Variable*****		 */
import dotenv from 'dotenv'
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



/*		*****Database Connection*****   	 */
import mongoose from "mongoose";

mongoose.set('strictQuery', false)
var options = {
	useNewUrlParser: true, useUnifiedTopology: true
};
const mongooseConnection = async()=>{
	const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-to-do.oro2wus.mongodb.net/?retryWrites=true&w=majority`;
	mongoose.connect(MONGODB_URL, options);
	
	mongoose.connection.on('connected', ()=>{
		console.log("Database Connected Sucessfully");
	});
	mongoose.connection.on('disconnected', ()=>{
		console.log("Database disconnected");
	});
	mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
};


export default mongooseConnection;