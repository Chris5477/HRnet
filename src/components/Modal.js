import { createPortal } from "react-dom";
import Button from "./Button";
import { useState } from "react";

const Modal = ({ props }) => {
	const [visibilityModal, setVisibilityModal] = useState(true);

	const closeModal = () => {
		setVisibilityModal(false);
		props(false);
	};

	return createPortal(
		<>
			{visibilityModal && (
				<div className="modal">
					<div className="content-modal">
						<p>Employee Created</p>
						<Button methods={closeModal} nameClass="round-btn" text="X" />
					</div>
				</div>
			)}
		</>,
		document.getElementById("modal")
	);
};
export default Modal;
