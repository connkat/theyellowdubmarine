// import { useState } from "react";

// import AnnoyingModal from "../components/AnnoyingModal";

import no from "../assets/no.png";
import water2 from "../assets/water2.png";
import RV from "../assets/yellowRV.png";
// import baby from "../assets/baby.gif";
import "../styles/animations.css";

export default function Home() {
  // const [modal, setModal] = useState(true);

  // function setHandleModal(): void {
  // 	setModal((prevModal) => !prevModal);
  // }

  return (
    <div
      className="min-h-screen flex flex-col bg-repeat bg-[length:20%]"
      style={{ backgroundImage: `url(${water2})` }}
    >
      <div className="wordart">
        <h1>The Yellow Dubmarine!!!!</h1>
      </div>
      <div
        className="w-11/12 md:w-3/5 bg-white mx-auto text-center px-4 md:px-[5vh]"
        style={{ fontFamily: '"Comic Neue", cursive' }}
      >
        <img src={RV} alt="RV" className="rv max-w-full pt-[5vh]" style={{ maxWidth: 200 }} />

        <div>
          <h2 className="rainbow text-sm md:text-base">
            Welcome to the home of Alberta's only mobile yellow stage dedicated
            to electronic music.
          </h2>
        </div>
        <div className="pb-[5vh] flex flex-col items-center">
          {/* <div className="main-title">
						<img src={baby} className="baby" alt="baby" />
					</div> */}

          <p className="warning-text pt-[2vh] text-sm md:text-base">
            <img src={no} alt="NO" className="inline max-w-[1vh] md:max-w-[2vh]" />
            WE ARE NOT ASSOCIATED WITH THE{" "}
            <a target="blank" href="https://freezerburn-wrestling-federation.netlify.app">
              FREEZERBURN WRESTLING FEDERATION
            </a>
            <img src={no} alt="NO" className="inline max-w-[1vh] md:max-w-[2vh]" />
          </p>
        </div>
      </div>
      {/* {modal && <AnnoyingModal setHandleModal={setHandleModal} />} */}
    </div>
  );
}
