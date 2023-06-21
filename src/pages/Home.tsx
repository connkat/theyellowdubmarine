// import { useState } from "react";

// import AnnoyingModal from "../components/AnnoyingModal";

// import construction from "../assets/consbar.gif";
import no from "../assets/no.png";
import RV from "../assets/yellowRV.png";
import baby from "../assets/baby.gif";
import lineup from "../assets/lineup.png";

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
			<div className="body-container">
				<img src={RV} alt="RV" className="rv" style={{ maxWidth: 200 }} />

				<div className="subtitle">
					<h2 className="rainbow">
						Welcome to the home of Alberta's only mobile yellow stage dedicated
						to electronic music.
					</h2>
				</div>
				{/* <img
					src={construction}
					className="construction"
					alt="Under construction"
				/> */}
				<div className="main-body">
					<div className="main-title">
						<img src={baby} className="baby" alt="baby" />
						<h1>Freezerburn 2023 lineup</h1>
						<img src={baby} className="baby" alt="baby" />
					</div>
					<img src={lineup} className="lineup" alt="lineup" />

					<p className="warning-text">
						<img src={no} alt="NO" className="no" />
						WE ARE NOT ASSOCIATED WITH THE{" "}
						<a target="blank" href="http://freezerburnwrestlingfederation.com">
							FREEZERBURN WRESTLING FEDERATION
						</a>
						<img src={no} alt="NO" className="no" />
					</p>
				</div>
			</div>
			{/* {modal && <AnnoyingModal setHandleModal={setHandleModal} />} */}
		</div>
	);
}
