const LineEmployee = ({ data }) => {
	const listData = Object.values(data);

	return (
		<tr>
			{listData.map((data, index) => (
				<td key={`index ${index}`}>{data}</td>
			))}
		</tr>
	);
};
export default LineEmployee;
