import Button from "../components/Button";
import { useState } from "react";
import InputWrapper from "../components/InputWrapper";
import { arrayInputsIdentity, arrayInputsAdress } from "../ListingComponents/Listing-inputs";

const CreateEmployee = () => {
	const [messageForm, setMessageForm] = useState("");

	return (
		<>
			<section className="container">
				<a href="employee-list.html">View Current Employees</a>
				<h2>Create Employee</h2>
				<form action="#" id="create-employee">
					{arrayInputsIdentity.map(({ label, text }, index) => (
						<InputWrapper label={label} text={text} key={`index + ${index}`} />
					))}

					<fieldset className="address">
						<legend>Address</legend>
						{arrayInputsAdress.map((wrapper, index) => (
							<InputWrapper label={wrapper.label} text={wrapper.text} key={`index + ${index}`} />
						))}
					</fieldset>

					<InputWrapper label="Department" text={"Department"} />
				</form>
				<Button methods={(message) => setMessageForm(message)} text={"save"} />
			</section>

			{messageForm}
		</>
	);
};

export default CreateEmployee;
