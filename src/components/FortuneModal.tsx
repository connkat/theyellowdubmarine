import RV from "../assets/yellowRV.png";

// import "./fortuneModal.css";

type Props = {
	show: boolean;
	close: () => void;
	fortune: string;
};

export default function FortuneModal(props: Props) {
	return (
		<>
			{props.show ? (
				<div className="FortuneModal">
					<div className="modal-header"></div>
					<button className="close" onClick={() => props.close()}>
						X
					</button>
					<div className="modal-body">
						<img
							src={RV}
							alt="RV"
							className="modal-rv"
							style={{ maxWidth: 100 }}
						/>
						<h3>Your fortune is:</h3>
						<p>{props.fortune}</p>
					</div>
				</div>
			) : null}
		</>
	);
}
