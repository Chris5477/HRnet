import { Link } from "react-router-dom";

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
export default Header;
