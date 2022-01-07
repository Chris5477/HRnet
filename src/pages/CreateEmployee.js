import Button from "../components/Button";
import { useState } from "react";
import InputWrapper from "../components/InputWrapper";
import { arrayInputsIdentity, arrayInputsAdress } from "../ListingComponents/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";
import Modal from "../components/Modal";

const CreateEmployee = () => {
	const [messageForm, setMessageForm] = useState("");

	const sendData = (e) => {
		e.preventDefault();
		document.querySelector(".modal").classList.remove("no-display");
	};

	return (
		<>
			<Header />
			<section className="container">
				<form id="create-employee" onSubmit={(e) => sendData(e)}>
					<Fieldset wrapperClass={" fieldset identity"} legend={"Identity"} array={arrayInputsIdentity} />
					<Fieldset wrapperClass={"fieldset adress"} legend={"Adress"} array={arrayInputsAdress} />
					<InputWrapper label="Department" text={"Department"} />
					<Button nameClass="create-btn" text={"Create"} />
				</form>
				<Modal />
			</section>

			{messageForm}
		</>
	);
};

export default CreateEmployee;
