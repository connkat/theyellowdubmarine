// import { useState } from "react";

// import AnnoyingModal from "../components/AnnoyingModal";

import no from "../assets/no.png";
import RV from "../assets/yellowRV.png";
import baby from "../assets/baby.gif";
import schedule from "../assets/2024-schedule.png"
import special from "../assets/2024-special.png"
import "./home.css";
import "./funkythings.css";
import Footer from "../components/Footer";

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
				<div className="main-body">
					{/* <div className="main-title">
						<img src={baby} className="baby" alt="baby" />
					</div> */}
					<div className="schedule">
						<img src={schedule} alt="NO" className="no" />
						<img src={special} alt="NO" className="no" />
					</div>
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
			<Footer />
		</div>
	);
}
