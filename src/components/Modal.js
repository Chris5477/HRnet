import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Button from "./Button";
import { useState } from "react";

/* CREATE A PORTAL TO SHOW A MODAL ON NAVIGATOR */

const Modal = ({ props }) => {
	/* SET A BOOLEAN TO SHOW OR NOT THE MODAL */
	const [visibilityModal, setVisibilityModal] = useState(true);

	/* ALLOWS TO CLOSE MODAL */
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
		document.body
	);
};
Modal.propTypes = {
	props: PropTypes.func.isRequired,
};

export default Modal;
