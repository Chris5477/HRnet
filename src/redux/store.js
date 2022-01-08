import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerEmployee } from "./employeeReducer";

export const store = createStore(reducerEmployee, applyMiddleware(thunk));
