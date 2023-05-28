import { useState } from "react";

import Alert from "react-popup-alert";

import RadioButton from "./RadioButton";
import "./annoyingModal.css";

import { createAge } from "../helperFunctions";

type AnnoyingModalProps = {
	setHandleModal: () => void;
};

export default function AnnoyingModal(props: AnnoyingModalProps) {
	const ages = createAge();
	const [age, setAge] = useState("");
	const [alert, setAlert] = useState({
		text: "This is a alert message",
		show: false,
	});

	function handleSubmit(event: any) {
		setAge(event);
		props.setHandleModal();
	}

	function onCloseAlert() {
		setAlert({
			text: "",
			show: false,
		});
	}

	function onShowAlert() {
		setAlert({
			text: "You thought it was that easy? Go find your TRUE age.",
			show: true,
		});
	}

	return (
		<div className="AnnoyingModal">
			<div className="modal-overlay" id="modal-overlay"></div>
			<div className="modal-container">
				<h1>To access this site, please confirm your birthday</h1>
				<h2>This easy to use form should get you started!</h2>
				<div className="modal-container-controls">
					<button type="submit" onClick={() => onShowAlert()}>
						X
					</button>
					<Alert
						header={"Header"}
						btnText={"Close"}
						text={alert.text}
						show={alert.show}
						onClosePress={onCloseAlert}
						pressCloseOnOutsideClick={true}
						showBorderBottom={true}
						alertStyles={{}}
						headerStyles={{}}
						textStyles={{}}
						buttonStyles={{}}
					/>
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
