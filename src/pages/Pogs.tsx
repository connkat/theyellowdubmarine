import { pickNum } from "../helperFunctions";
import { data } from "../pogs";

import "./pogs.css";

export default function Pogs() {
	const fortune = pickNum(8);
	return (
		<div className="Pogs">
			<h1>You traded a pog for a thought! Nice work!</h1>
			<h3>Here is your fortune for the day:</h3>
			{data[fortune]}
		</div>
	);
}
