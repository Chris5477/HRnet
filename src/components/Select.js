import Option from "./Option";

const Select = ({ label, text, method, value, arr }) => {
	return (
		<>
			{label && <label htmlFor={label}>{text}</label>}
			<select id={label} onChange={(e) => method && method(e)} value={value}>
				{arr.map(({ value, text }, index) => (
					<Option key={`index ${index}`} value={value} text={text} />
				))}
			</select>
		</>
	);
};
export default Select;
