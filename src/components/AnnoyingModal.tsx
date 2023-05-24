import { useState } from "react";

import RadioButton from "./RadioButton";
import "./annoyingModal.css";

type AnnoyingModalProps = {
	setHandleModal: () => void;
};

export default function AnnoyingModal(props: AnnoyingModalProps) {
	const [age, setAge] = useState("");

	function handleSubmit(event: any) {
		setAge(event);
		props.setHandleModal()
	}

	function createAge() {
		let output = [];
		for (let i = 1; i <= 100; i++) {
			output.push(i);
		}
		return output;
	}

	const ages = createAge();

	return (
		<div className="AnnoyingModal">
			<div className="modal-overlay" id="modal-overlay"></div>
			<div className="modal-container">
				<div className="modal-container-controls">
					<button type="submit" onClick={props.setHandleModal}>
						X
					</button>
				</div>
				<div className="modal-container-content">
					<div>
						<label>Your age:</label>
					</div>
					<form>
						{ages.map((age, index) => (
							<RadioButton value={age} lable={age} key={index} />
						))}
						<div>
							<button type="submit" onClick={handleSubmit} value={age}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
