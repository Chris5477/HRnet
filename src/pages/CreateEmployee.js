import Button from "../components/Button";
import { arrayInputsIdentity, arrayInputsAdress } from "../utils/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/employee";

const CreateEmployee = () => {
	const [showModal, setShowModal] = useState(false);
	const [formMessage, setFormMessage] = useState("");
	const myDispatch = useDispatch();

	const errorValidation = (arr) => {
		setFormMessage("Veuillez remplir tous les champs du formulaire !");
		arr.forEach((el) => (!el.value ? (el.className = "error-validation") : el.classList.remove("error-validation")));
	};

	const succesValidation = (arr) => {
		setFormMessage("");
		setShowModal(true);
		const employee = {
			firstName: arr[0].value,
			lastName: arr[1].value,
			begin: arr[3].value, // A SIMPLIFIER
			department: arr[4].value,
			birthday: arr[2].value,
			street: arr[5].value,
			city: arr[6].value,
			state: arr[7].value,
			zip: arr[8].value,
		};

		myDispatch(setData(employee));
	};

	const sendData = (e) => {
		e.preventDefault();
		const inputs = [...document.querySelectorAll("input")];
		inputs.splice(4, 0, document.querySelector("select"));
		inputs.find((el) => !el.value) ? errorValidation(inputs) : succesValidation(inputs);
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
				<p className="validator">{formMessage}</p>
				{showModal && <Modal wxc={setShowModal} />}
			</section>
		</>
	);
};

export default CreateEmployee;
