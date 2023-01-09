import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());






app.get('/', async(req, res)=>{
	res.send("hello from server");
})









const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
	console.log(`server is running on port: ${PORT}`);
});
