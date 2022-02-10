const ArrowButton = ({ text, changeYears, classCss }) => {
	return (
		<span onClick={() => changeYears(text)} className={classCss}>
			{text}
		</span>
	);
};
export default ArrowButton;
