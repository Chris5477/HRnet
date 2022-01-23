import Button from "../components/Button";
import { arrayInputsIdentity, arrayInputsAdress } from "../ListingComponents/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/employee";

const CreateEmployee = () => {
	const [showModal, setShowModal] = useState(false);

	const myDispatch = useDispatch();
	const sendData = (e) => {
		const inputs = [...document.querySelectorAll("input")];
		e.preventDefault();
		setShowModal(true);
		const employee = {
			firstName: inputs[0].value,
			lastName: inputs[1].value,
			begin: inputs[3].value, // A SIMPLIFIER
			department: document.querySelector("select").value,
			birthday: inputs[2].value,
			street: inputs[4].value,
			city: inputs[5].value,
			state: inputs[6].value,
			zip: inputs[7].value,
		};

		myDispatch(setData(employee));
	};

	return (
		<>
			<Header />
			<section className="container">
				<form id="create-employee" onSubmit={(e) => sendData(e)}>
					<Fieldset wrapperClass={" fieldset employee"} legend={"Employee"} array={arrayInputsIdentity} />
					<Fieldset wrapperClass={"fieldset adress"} legend={"Adress"} array={arrayInputsAdress} />
					<Button nameClass="create-btn" text={"Create"} />
				</form>
				{showModal && <Modal wxc={setShowModal} />}
			</section>
		</>
	);
};

export default CreateEmployee;
