import Button from "../components/Button";
import { arrayInputsIdentity, arrayInputsAdress } from "../utils/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/employee";

const CreateEmployee = () => {
	const [showModal, setShowModal] = useState(false);
	const [formMessage, setFormMessage] = useState("");
	const store = useSelector((state) => state);
	const myDispatch = useDispatch();

	useEffect(() => (store.filteredEmployee = store.employee), []);
	const completeList = arrayInputsIdentity.concat([{ label: "department", value: "" }], arrayInputsAdress);

	const errorValidation = (arr) => {
		setFormMessage("Veuillez remplir tous les champs du formulaire !");
		arr.forEach((el) => (!el.value ? (el.className = "error-validation") : el.classList.remove("error-validation")));
	};

	const succesValidation = (arr) => {
		setFormMessage("");
		setShowModal(true);
		const res = completeList.reduce((acc, val, index) => {
			acc[val.label] = arr[index].value;
			return acc;
		}, {});
		myDispatch(setData(res));
	};

	const sendData = (e) => {
		e.preventDefault();
		const inputs = [...document.querySelectorAll("input")];
		inputs.splice(4, 0, document.querySelector("select"));
		inputs.find((el) => !el.value) ? errorValidation(inputs) : succesValidation(inputs);
	};
	return (
		<>
			<Header link={"/employee-list"} text={"View Current Employees"} />
			<section className="container">
				<form id="create-employee" onSubmit={(e) => sendData(e)}>
					<Fieldset wrapperClass={"fieldset"} legend={"Employee"} array={arrayInputsIdentity} />
					<Fieldset wrapperClass={"fieldset"} legend={"Adress"} array={arrayInputsAdress} />
					<Button nameClass="create-btn" text={"Create"} />
				</form>
				<p className="validator">{formMessage}</p>
				{showModal && <Modal props={setShowModal} />}
			</section>
		</>
	);
};

export default CreateEmployee;
