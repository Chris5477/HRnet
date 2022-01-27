const LineEmployee = ({ data }) => {
	const listEmployee = Object.values(data);
	return (
		<tr>
			{listEmployee.map((data, index) => (
				<td className="line-employee" key={`index ${index}`}>
					{data}
				</td>
			))}
		</tr>
	);
};
export default LineEmployee;
