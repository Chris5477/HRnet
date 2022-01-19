import { CREATE_EMPLOYEE, MAX_RESULT_EMPLOYEE } from "./employee";

const initialState = {
	employee: [],
	maxEmployee: 10,
};

export const reducerEmployee = (state = initialState, action) => {
	if (action.type === CREATE_EMPLOYEE) {
		return {
			...state,
			employee: [...state.employee, action.payload],
		};
	} else if (action.type === MAX_RESULT_EMPLOYEE) {
		return {
			...state,
			maxEmployee: action.payload,
		};
	} else {
		return state;
	}
};
