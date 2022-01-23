export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const MAX_RESULT_EMPLOYEE = "MAX_RESULT_EMPLOYEE";
export const FILTERED_EMPLOYEE = "FILTERED_EMPLOYEE";

const createEmployee = (obj) => {
	return {
		type: CREATE_EMPLOYEE,
		payload: obj,
	};
};

const maxEmployee = (index) => {
	return {
		type: MAX_RESULT_EMPLOYEE,
		payload: index,
	};
};

const filteredEmployee = (word) => {
	return {
		type: FILTERED_EMPLOYEE,
		payload: word,
	};
};

export const setData = (value) => {
	return (dispatch) => {
		dispatch(createEmployee(value));
	};
};

export const setMaxEmployee = (value) => {
	return (dispatch) => {
		dispatch(maxEmployee(value));
	};
};

export const filterEmployee = (value) => {
	return (dispatch) => {
		dispatch(filteredEmployee(value));
	};
};
