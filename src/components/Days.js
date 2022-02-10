const Days = ({ method, text, year, month }) => {
	return (
		<span onClick={(e) => method && method(`${year}/${month}/${e.target.innerText}`)} className={"day-of-month"}>
			{text}
		</span>
	);
};
export default Days;
