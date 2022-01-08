export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";

const createEmployee = (obj) => {
	return {
		type: CREATE_EMPLOYEE,
		payload: obj,
	};
};

export const setData = (value) => {
	return (dispatch) => {
		dispatch(createEmployee(value));
	};
};
