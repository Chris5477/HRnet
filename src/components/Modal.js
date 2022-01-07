import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = () => {
	const closeModal = () => {
		document.querySelector(".modal").classList.add("no-display");
	};

	return createPortal(
		<div className="modal no-display">
			<div className="content-modal">
				<p>Employee Created</p>
				<Button methods={() => closeModal()} nameClass="round-btn" text="X" />
			</div>
		</div>,
		document.getElementById("modal")
	);
};
export default Modal;
