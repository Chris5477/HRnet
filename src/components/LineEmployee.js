import PropTypes from "prop-types";

/* CREATE A COMPONENT TO CREATE A NEW EMPLOYEE */

const LineEmployee = ({ data }) => {
	/* ALLOWS TO SORT DISPLAY VALUE OF EMPLOYYE */
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
LineEmployee.propTypes = {
	data: PropTypes.object.isRequired,
};
export default LineEmployee;
