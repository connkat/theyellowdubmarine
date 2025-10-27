import { Link } from "react-router-dom";

import Layout from "./Layout";

export default function SiteMap() {
	return (
		<Layout>
			<div className="max-w-3xl mx-auto p-6">
				<h1 className="text-2xl font-bold mb-4">Site Map</h1>
				<div className="flex flex-col gap-2">
					<Link className="text-blue-600 hover:underline" to="/">Home</Link>
					<Link className="text-blue-600 hover:underline" to="/pogs">Pogs</Link>
					<Link className="text-blue-600 hover:underline" to="/photos">Photos</Link>
					<Link className="text-blue-600 hover:underline" to="/site-map">Site Map</Link>
				</div>
			</div>
		</Layout>
	);
}
