import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";

import { Home, Pogs }from "./pages";

export default function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/pogs" element={<Pogs />}></Route>
				</Routes>
			</Router>
		</div>
	);
}
