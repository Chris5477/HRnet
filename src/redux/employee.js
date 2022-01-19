export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const MAX_RESULT_EMPLOYEE = "MAX_RESULT_EMPLOYEE";

const createEmployee = (obj) => {
	return {
		type: CREATE_EMPLOYEE,
		payload: obj,
	};
};

const filterEmployed = (index) => {
	return {
		type: MAX_RESULT_EMPLOYEE,
		payload: index,
	};
};

export const setData = (value) => {
	return (dispatch) => {
		dispatch(createEmployee(value));
	};
};

export const filteredEmployee = (value) => {
	return (dispatch) => {
		dispatch(filterEmployed(value));
	};
};
