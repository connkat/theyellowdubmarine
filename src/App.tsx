import { useState } from "react";
import "./styles.css";

import AnnoyingModal from "./components/AnnoyingModal";

export default function App() {
	const [modal, setModal] = useState(true);

	function setHandleModal(): void {
		setModal(prevModal => !prevModal);
	}

	return (
		<div className="App">
			<h1>To access this site, please confirm your birthday</h1>
			<h2>This easy to use form should get you started!</h2>

			{modal && <AnnoyingModal setHandleModal={setHandleModal}/>}
			<br />
			<button type="submit" onClick={setHandleModal}>
				Open
			</button>
		</div>
	);
}
