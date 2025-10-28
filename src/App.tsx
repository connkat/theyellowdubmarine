import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";

import { Home, Pogs, Photos, SiteMap } from "./pages";

export default function App() {
	return (
		<Router>
			<div className="Layout min-h-screen flex flex-col">
				<main className="flex-1 bg-white">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pogs" element={<Pogs />} />
						<Route path="/photos" element={<Photos />} />
						<Route path="/site-map" element={<SiteMap />} />
					</Routes>
				</main>
				<footer className="bg-white flex justify-evenly">
					<Link to="/">Home</Link>
					<Link to="/pogs">Pogs</Link>
					<Link to="/photos">Photos</Link>
					{/* <Link to="/site-map">Site Map</Link> */}
				</footer>
			</div>
		</Router>
	);
}
