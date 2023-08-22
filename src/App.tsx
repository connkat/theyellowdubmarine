import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

import { Home, Pogs, Photos } from "./pages";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/pogs" element={<Pogs />}></Route>
				<Route path="/photos" element={<Photos />}></Route>
			</Routes>
		</Router>
	);
}
