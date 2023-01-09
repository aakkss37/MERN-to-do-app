import express from "express";
import { addTodo, fetchAllTodos } from "../controller/todo-controller.js";
const route = express.Router()

route.post('/todo', addTodo)
route.get('/todo', fetchAllTodos)

export default route;