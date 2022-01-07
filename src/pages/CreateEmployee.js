import Button from "../components/Button";
import { useState } from "react";
import InputWrapper from "../components/InputWrapper";
import { arrayInputsIdentity, arrayInputsAdress } from "../ListingComponents/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";

const CreateEmployee = () => {
	const [messageForm, setMessageForm] = useState("");

	return (
		<>
			<Header />
			<section className="container">
				<form action="#" id="create-employee">
					<Fieldset wrapperClass={" fieldset identity"} legend={"Identity"} array={arrayInputsIdentity} />
					<Fieldset wrapperClass={"fieldset adress"} legend={"Adress"} array={arrayInputsAdress} />
					<InputWrapper label="Department" text={"Department"} />
					<Button nameClass="create-btn" methods={(message) => setMessageForm(message)} text={"Create"} />
				</form>
			</section>

			{messageForm}
		</>
	);
};

export default CreateEmployee;
