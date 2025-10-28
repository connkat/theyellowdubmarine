import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

import { Home, Pogs, Photos, SiteMap } from "./pages";
import Layout from "./pages/Layout";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/pogs" element={<Pogs />} />
					<Route path="/photos" element={<Photos />} />
					<Route path="/site-map" element={<SiteMap />} />
				</Route>
			</Routes>
		</Router>
	);
}
