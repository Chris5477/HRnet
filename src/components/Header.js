import { Link } from "react-router-dom";

const Header = ({ link, text }) => {
	return (
		<header className="header">
			<Link className="link link-header" to={link}>
				{text}
			</Link>
			<h1 className="title-page">Create Employee</h1>
		</header>
	);
};
export default Header;
