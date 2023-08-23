import construction from "../assets/consbar.gif";
import Layout from "./Layout";

import "./photos.css";

export default function Photos() {
	return (
		<Layout>
			<div className="Photos">
				<img
					src={construction}
					className="construction"
					alt="Under construction"
				/>
				<h3>
					We're working hard to track down evidence of the party bus! Come back
					soon!
				</h3>
				<img
					src={construction}
					className="construction"
					alt="Under construction"
				/>
			</div>
		</Layout>
	);
}
