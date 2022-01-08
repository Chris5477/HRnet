import { CREATE_EMPLOYEE } from "./employee";

const initialState = {
	employee: [],
};

export const reducerEmployee = (state = initialState, action) => {
	if (action.type == CREATE_EMPLOYEE) {
		return {
			...state,
			employee: state.employee.push(action.payload),
		};
	} else {
		return state;
	}
};
