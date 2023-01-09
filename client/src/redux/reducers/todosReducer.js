import * as dispatchActionType from '../actions/dispatchType'

export const todosReducers = (state=[], action) => {
	switch (action.type) {
		case dispatchActionType.Add_New_Todo:
			return [action.payload, ...state];
		case dispatchActionType.Get_All_Todo:
			return action.payload
		case dispatchActionType.Toggle_Todo:
			// console.log("toggeled data done ------>",action.payload.done);
			return state.map(todo => (
				todo._id === action.payload._id ? {...todo, done: !todo._id } : todo
			))


		default:
			return state;
	}
};