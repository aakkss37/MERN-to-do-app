import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/database.js';
import dotenv from 'dotenv'
import route from './routes/route.js';

/* App configuration */
const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


/* Database connection */
Connection();


/* Route */
app.use('/', route)




dotenv.config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
	console.log(`server is running on port: ${PORT}`);
});
