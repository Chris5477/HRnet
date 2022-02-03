/* istanbul ignore file */
import { CREATE_EMPLOYEE, FILTERED_EMPLOYEE, MAX_RESULT_EMPLOYEE } from "./employee";

const initialState = {
	employee: [],
	maxEmployee: 10,
	filteredEmployee: [],
};

export const reducerEmployee = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_EMPLOYEE:
			return {
				...state,
				employee: [...state.employee, action.payload],
			};

		case MAX_RESULT_EMPLOYEE:
			return {
				...state,
				maxEmployee: action.payload,
			};

		case FILTERED_EMPLOYEE:
			return {
				...state,
				filteredEmployee: state.employee.filter(
					(word) =>
						String(word.firstName).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.lastName).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.department).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.birthday).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.begin).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.state).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.street).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.city).toLowerCase().match(String(action.payload).toLowerCase()) ||
						String(word.zip).match(action.payload)
				),
			};

		default:
			return state;
	}
};
