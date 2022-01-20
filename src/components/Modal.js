import { createPortal } from "react-dom";
import Button from "./Button";
import { useState } from "react";

const Modal = ({ wxc }) => {
	const [visibilityModal, setVisibilityModal] = useState(true);

	const aaa = () => {
		setVisibilityModal(false);
		wxc(false);
	};

	return createPortal(
		<>
			{visibilityModal && (
				<div className="modal">
					<div className="content-modal">
						<p>Employee Created</p>
						<Button methods={aaa} nameClass="round-btn" text="X" />
					</div>
				</div>
			)}
		</>,
		document.getElementById("modal")
	);
};
export default Modal;
