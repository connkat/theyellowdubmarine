import { useState, useCallback } from "react";

import RadioButton from "./RadioButton";
import "./annoyingModal.css";

import { createAge, numConsequences, alertText } from "../helperFunctions";

type AnnoyingModalProps = {
	setHandleModal: () => void;
};

export default function AnnoyingModal(props: AnnoyingModalProps) {
	const ages = createAge();
	const [age, setAge] = useState(0);
	const [showAlert, setShowAlert] = useState(false);



	const handleSubmit = useCallback(event: any) => {
		setAge(event.target.value);
		const ageMessage = numConsequences(age);
		alertText(ageMessage);

		console.log("!!!!!!!!!", event)

		if (ageMessage === "That age seems okay, you may proceed") {
			props.setHandleModal();
		}
	}

	return (
		<div className="AnnoyingModal">
			<div className="modal-overlay" id="modal-overlay"></div>
			<div className="modal-container">
				<h1>To access this site, please confirm your birthday</h1>
				<h2>This easy to use form should get you started!</h2>
				<div className="modal-container-controls">
					<button type="submit" onClick={() => setShowAlert(!showAlert)}>
						X
					</button>
				</div>
				<div className="modal-container-content">
					<div>
						<label>Your age:</label>
					</div>
					<form>
						{ages.map((age, index) => (
							<RadioButton value={age} lable={age} key={index} setSelected={setAge} />
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
