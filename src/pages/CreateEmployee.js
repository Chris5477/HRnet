import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputWrapper from "../components/InputWrapper";
import { arrayInputsIdentity, arrayInputsAdress } from "../ListingComponents/Listing-inputs";
import Fieldset from "../components/Fieldset";

const CreateEmployee = () => {
	const [messageForm, setMessageForm] = useState("");

	return (
		<>
			<section className="container">
				<Link to="/employee-list">View Current Employees</Link>

				<h2>Create Employee</h2>
				<form action="#" id="create-employee">
					<Fieldset wrapperClass={"identity"} legend={"Identity"} array={arrayInputsIdentity} />
					<Fieldset wrapperClass={"adress"} legend={"Adress"} array={arrayInputsAdress} />
					<InputWrapper label="Department" text={"Department"} />
				</form>
				<Button methods={(message) => setMessageForm(message)} text={"save"} />
			</section>

			{messageForm}
		</>
	);
};

export default CreateEmployee;
