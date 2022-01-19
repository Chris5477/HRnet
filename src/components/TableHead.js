const TableHead = ({ value, method }) => {
	return (
		<th onClick={() => method()} className={"table-head"}>
			{value}
			<div className="arrow">
				<span className="fas fa-sort-up"></span>
				<span className="fas fa-sort-down disabled"></span>
			</div>
		</th>
	);
};
export default TableHead;
