import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/* CREATE A REUSABLE COMPONENT HEADER TO SHOW TITLE AND CONTAINS NAVIGATION */

const Header = ({ link, text, title }) => {
	return (
		<header className="header">
			<Link className="link link-header" to={link}>
				{text}
			</Link>
			<h1 className="title-page">{title}</h1>
		</header>
	);
};
Header.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default Header;
