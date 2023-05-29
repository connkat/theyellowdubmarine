import { useState } from "react";

import Alert from "react-popup-alert";

export default function DenialAlert() {
	const [alert, setAlert] = useState({
		text: "You thought it was that easy? Go find your TRUE age. We will know if you are lying.",
		show: false,
	});

	function onCloseAlert() {
		setAlert({
			text: "",
			show: false,
		});
	}

	return (
		<div className="DenialAlert">
			<Alert
				header={"Header"}
				btnText={"Close"}
				text={alert.text}
				show={alert.show}
				onClosePress={onCloseAlert}
				pressCloseOnOutsideClick={true}
				showBorderBottom={true}
				alertStyles={{ opacity: "100%", backgroundColor: "red", zIndex: 1 }}
				headerStyles={{}}
				textStyles={{}}
				buttonStyles={{}}
			/>
		</div>
	);
}
