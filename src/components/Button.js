const Button = ({ nameClass, methods, text }) => {
	return (
		<button className={nameClass} onClick={methods && methods}>
			{text}
		</button>
	);
};
export default Button;
