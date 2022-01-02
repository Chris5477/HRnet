const Button = ({ methods, text }) => {
	return <button onClick={() => methods("Employee Created")}>{text}</button>; // NOT FINAL
};
export default Button;
