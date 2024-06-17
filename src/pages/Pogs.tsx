import { useState } from "react";

import FortuneModal from "../components/FortuneModal";
import { pickNum } from "../helperFunctions";
import { data } from "../pogs";
import pogsGIF from "../assets/pogs.gif";
import "./pogs.css";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Pogs() {
	const [modal, setModal] = useState(false);
	const Toggle = () => setModal(!modal);

	const fortune = data[pickNum(data.length)];

	return (
		<Layout>
			<div className="Pogs">
				<div className="pogs-container">
					<div className="wordart-pogs">
						<h1>Thank you for visiting the Yellow Dubmarine!</h1>
					</div>
					<h2>You traded a pog for a thought! Nice work!</h2>
					<img src={pogsGIF} className="pogsGIF" alt="pogsGIF" />
					<h4>Your payment of one (1) pog gets you one (1) fortune:</h4>
					<button onClick={() => Toggle()}>Click to open your fortune</button>
					<FortuneModal
						show={modal}
						close={() => setModal(false)}
						fortune={fortune}
					/>
					<p>
						Thanks for participating! You can checkout the{" "}
						<Link to="/">Home Page</Link> for the 2024 Dubmarine lineup at
						Freezerburn!
					</p>
				</div>
			</div>
		</Layout>
	);
}
