const LineEmployee = ({ data }) => {
	const { firstName, lastName, begin, department, birthday, street, city, state, zip } = data;
	const listData = [firstName, lastName, begin, department, birthday, street, city, state, zip];
	return (
		<tr>
			{listData.map((data, index) => (
				<td className="line-employee" key={`index ${index}`}>
					{data}
				</td>
			))}
		</tr>
	);
};
export default LineEmployee;
