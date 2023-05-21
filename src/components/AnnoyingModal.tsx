import { useState } from "react";
import "./annoyingModal.css";

type AnnoyingModalProps = {
	setHandleModal: () => void;
};

export default function AnnoyingModal(props: AnnoyingModalProps) {
	const [name, setName] = useState("");
	const [password, setPassword] = useState(
		"SlQyH9QNnY49EMezaH2g3scwihOTH9MJwhrm8bsBy7IXOgZKKLrz1RklVBzescHIZwNYwmT9DBVFEHoSdfmIX91jMRKyo2tUXzfI"
	);
	const [length, setLength] = useState(1);
	const [active, setActive] = useState(false);

	function handleNameChange(event: any) {
		const value = event.target.value;
		if (value.length === length - 1) setName(value);
	}

	function handleLongerClick(value: any) {
		setLength(length + 1);
		setActive(!active);
	}

	function handlePasswordChange(event: any) {
		const value = event.target.value;

		if (value.length <= password.length) {
			setPassword(value);
		}
	}

	function handleSubmit(event: any) {
		console.log(event);
	}

	return (
		<div className="AnnoyingModal">
			<div>
				<button type="submit" onClick={props.setHandleModal}>
					X
				</button>
			</div>
			<h1>Welcome to this free service</h1>
			<h2>This easy to use form should get you started!</h2>

			<form>
				<label>Your name</label>
				<br />
				<input type="text" value={name} onChange={handleNameChange}></input>
				<br />
				<small>Name length should be: {length - 1}</small>

				<div>
					<input
						type="checkbox"
						checked={active}
						onChange={handleLongerClick}
					></input>
					<label>My name is longer</label>
				</div>

				<br />
				<br />

				<div>
					<label>Password</label>
					<br />
					<input
						type="text"
						value={password}
						onChange={handlePasswordChange}
					></input>
				</div>

				<br />
				<br />

				<div>
					<button type="submit" onSubmit={handleSubmit}>
						Registreer
					</button>
				</div>
			</form>
		</div>
	);
}
