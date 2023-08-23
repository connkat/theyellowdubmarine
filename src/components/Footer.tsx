import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
	return (
		<div className="footer">
			<Link to="/">Home</Link>
			<Link to="/pogs">Pogs</Link>
			<Link to="/photos">Photos</Link>
			<Link to="/site-map">Site Map</Link>
		</div>
	);
}
