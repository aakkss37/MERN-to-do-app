export const addTodo = async(request, responce)=>{
	try {
		console.log(request.body);
	} catch (error) {
		console.log("error from addtodo controller ----> ", error.message);
	}
}