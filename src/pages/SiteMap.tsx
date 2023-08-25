import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function SiteMap() {
	return (
		<div className="SiteMap">
			<Layout>
				<h1>Site Map</h1>
				<div className="site-map-body">
					<Link to="/">Home</Link>
					<Link to="/pogs">Pogs</Link>
					<Link to="/photos">Photos</Link>
				</div>
			</Layout>
		</div>
	);
}
