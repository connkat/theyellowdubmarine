// import { useState } from "react";

// import AnnoyingModal from "../components/AnnoyingModal";

import construction from "../assets/consbar.gif";
import no from "../assets/no.png";
import RV from "../assets/yellowRV.png";

import "./home.css";
import "./funkythings.css";

export default function Home() {
	// const [modal, setModal] = useState(true);

	// function setHandleModal(): void {
	// 	setModal((prevModal) => !prevModal);
	// }

	return (
		<div className="Home">
			<div className="wordart">
				<h1>The Yellow Dubmarine!!!!</h1>
			</div>
			<div className="main-body">
				<img src={RV} alt="RV" className="rv" style={{ maxWidth: 200 }} />

				<div className="subtitle">
					<h2 className="rainbow">
						Welcome to the home of Alberta's only mobile yellow stage dedicated
						to electronic music.
					</h2>
				</div>

				<p className="warning-text">
					<img src={no} alt="NO" style={{ maxWidth: 20 }} />
					WE ARE NOT ASSOCIATED WITH THE{" "}
					<a target="blank" href="http://freezerburnwrestlingfederation.com">
						FREEZERBURN WRESTLING FEDERATION
					</a>
					<img src={no} alt="NO" style={{ maxWidth: 20 }} />
				</p>
				<img
					src={construction}
					className="construction"
					alt="Under construction"
				/>
			</div>
			{/* {modal && <AnnoyingModal setHandleModal={setHandleModal} />} */}
		</div>
	);
}
