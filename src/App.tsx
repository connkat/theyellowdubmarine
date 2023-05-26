import { useState } from "react";
import "./styles.css";

import AnnoyingModal from "./components/AnnoyingModal";

export default function App() {
	const [modal, setModal] = useState(true);

	function setHandleModal(): void {
		setModal((prevModal) => !prevModal);
	}

	return (
		<div className="App">
			<h1>Welcome to the home of the Yellow Dubmarine!</h1>
			<h2>
				Home to Alberta's only yellow mobile stage dedicated to electronic music
				(for now)
			</h2>

			{modal && <AnnoyingModal setHandleModal={setHandleModal} />}
		</div>
	);
}
