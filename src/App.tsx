// import { useState } from "react";

// import AnnoyingModal from "../components/AnnoyingModal";

import construction from "../assets/consbar.gif";
import no from "./assets/no.png";
import RV from "./assets/yellowRV.png";

// import "./home.css";

export default function App() {
	// const [modal, setModal] = useState(true);

	// function setHandleModal(): void {
	// 	setModal((prevModal) => !prevModal);
	// }

	return (
		<div className="App">
			<div className="wordart">
				<h1>The Yellow Dubmarine!!!!</h1>
			</div>
			<div className="main-body">
				<div className="subtitle">
					<h2 className="rainbow">
						Welcome to the home of Alberta's only yellow mobile stage dedicated
						to electronic music.
					</h2>
				</div>
				<div className="rv">
					<img src={RV} alt="RV" style={{ maxWidth: 200 }} />
				</div>

				<h3 className="warning-text">
					<img src={no} alt="NO" style={{ maxWidth: 20 }} />
					WE ARE NOT ASSOCIATED WITH THE{" "}
					<a target="blank" href="http://freezerburnwrestlingfederation.com">
						FREEZERBURN WRESTLING FEDERATION
					</a>
					<img src={no} alt="NO" style={{ maxWidth: 20 }} />
				</h3>
				<img src={construction} alt="Under construction" />
			</div>
			{/* {modal && <AnnoyingModal setHandleModal={setHandleModal} />} */}
		</div>
	);
}
