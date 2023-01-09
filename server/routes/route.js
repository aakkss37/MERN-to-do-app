import express from "express";
import { addTodo, fetchAllTodos, toggleTodo } from "../controller/todo-controller.js";
const route = express.Router()

route.post('/todo', addTodo)
route.get('/todo', fetchAllTodos)
route.get('/todo/:id', toggleTodo)

export default route;