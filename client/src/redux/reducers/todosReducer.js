import * as dispatchActionType from '../actions/dispatchType'

export const todosReducers = (state=[], action) => {
	switch (action.type) {
		case dispatchActionType.Add_New_Todo:
			return [action.payload, ...state]
	
		default:
			return state;
	}
};