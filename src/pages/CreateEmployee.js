import Button from "../components/Button";
import InputWrapper from "../components/InputWrapper";
import { arrayInputsIdentity, arrayInputsAdress } from "../ListingComponents/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { setData } from "../redux/employee";
import Datepicker from "../components/Datapicker";

const CreateEmployee = () => {
	const myDispatch = useDispatch();

	const sendData = (e) => {
		e.preventDefault();

		const inputs = [...document.querySelectorAll("input")];
		document.querySelector(".modal").classList.remove("no-display");
		const wxc = {
			firstName: inputs[0].value,
			lastName: inputs[1].value,
			birthday: inputs[2].value,
			begin: inputs[3].value, // A SIMPLIFIER
			street: inputs[4].value,
			city: inputs[5].value,
			state: inputs[6].value,
			zip: inputs[7].value,
			department: document.querySelector("select").value,
		};
		myDispatch(setData(wxc));
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
			<Datepicker />
		</>
	);
};

export default CreateEmployee;
