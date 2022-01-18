const TableHead = ({ value, method }) => {
	return (
		<th onClick={() => method()} className={"table-head"}>
			{value}
		</th>
	);
};
export default TableHead;
