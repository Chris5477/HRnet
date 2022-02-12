import PropTypes from "prop-types";
import { useState } from "react";

/* CREATE A COMPONENT TABLEHEAD USING TH ELEMENT HTML */

const TableHead = ({ value, method }) => {
	const [indicatorOrder, setIndicatorOrder] = useState(false);
	const [indicatorUnOrder, setIndicatorUnOrder] = useState(false);

	const setIndicators = () => {
		setIndicatorOrder(!indicatorOrder);
		setIndicatorUnOrder(!indicatorUnOrder);
		method();
	};

	return (
		<th onClick={setIndicators} className={"table-head"}>
			<span className="value-thead">{value}</span>
			<div className="arrows">
				{indicatorOrder ? <span className="fas fa-sort-up sorted"> </span> : <span className="fas fa-sort-up"> </span>}
				{!indicatorUnOrder ? <span className="fas fa-sort-down sorted"> </span> : <span className="fas fa-sort-down"></span>}
			</div>
		</th>
	);
};
TableHead.propTypes = {
	value: PropTypes.string.isRequired,
	method: PropTypes.func.isRequired,
};
export default TableHead;
