const LineEmployee = ({ data }) => {
	const { firstName, lastName, birthday, begin, street, city, state, zip, department } = data;

	return (
		<tr>
			<td>{firstName}</td>
			<td>{lastName}</td>
			<td>{begin}</td>
			<td>{department}</td>
			<td>{birthday}</td>
			<td>{street}</td>
			<td>{city}</td>
			<td>{state}</td>
			<td>{zip}</td>
		</tr>
	);
};
export default LineEmployee;
