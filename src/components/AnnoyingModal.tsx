import { useState } from "react";

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

	function handleSubmit(event: any) {
		setAge(event);
		const ageMessage = numConsequences(age);
		console.log("AGE!!!!!!!", age);
		alertText(ageMessage);

		props.setHandleModal();
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
