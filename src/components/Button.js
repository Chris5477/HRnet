const Button = ({ nameClass, methods, text }) => {
	return (
		<button className={nameClass} onClick={() => methods("Employee Created")}>
			{text}
		</button>
	); // NOT FINAL
};
export default Button;
