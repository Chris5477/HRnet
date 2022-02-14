import Button from "../components/Button";
import { arrayInputsIdentity, arrayInputsAdress } from "../utils/Listing-inputs";
import Fieldset from "../components/Fieldset";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/employee";

/* CREATE CREATEEMPLOYEE COMPONENT AS PAGE , OR HOME PAGE */

const CreateEmployee = () => {
	const [showModal, setShowModal] = useState(false);
	const [formMessage, setFormMessage] = useState("");
	const store = useSelector((state) => state);
	const myDispatch = useDispatch();

	/* ALLOWS RESET RESEARCH TO SHOW ALL EMPLOYEE ON LISTEMPLOYEE PAGE */

	useEffect(() => {
		store.filteredEmployee = store.employee;
		store.maxEmployee = Math.max();
	}, [store]);

	/* ALLOWS TO REFUSE EMPLOYEE CREATION IF ONE OR MORE FORM FIELDS ARE MISSING */
	const errorValidation = (arr) => {
		setFormMessage("Veuillez remplir tous les champs du formulaire !");
		arr.forEach((el) => (!el.value ? (el.className = "error-validation") : el.classList.remove("error-validation")));
	};

	/* CREATE A NEW EMPLOYEE ON THE STORE AND CREATE A MODAL */
	const succesValidation = (arr) => {
		setFormMessage("");
		setShowModal(true);
		const employeeObject = {
			firstName: arr[0].value,
			lastName: arr[1].value,
			begin: arr[3].value,
			department: arr[4].value,
			birthday: arr[2].value,
			street: arr[5].value,
			city: arr[6].value,
			state: arr[7].value,
			zip: arr[8].value,
		};

		myDispatch(setData(employeeObject));
		arr.forEach((el) => (el.value = ""));
	};

	/* ALLOWS TO MANAGE FORMS */
	const sendData = (e) => {
		const select = document.querySelector("select");
		e.preventDefault();
		if (select.value === "Choisir un département") {
			select.value = "";
		}
		const inputs = [...document.querySelectorAll("input")];
		inputs.splice(4, 0, select);
		inputs.find((el) => !el.value) ? errorValidation(inputs) : succesValidation(inputs);
	};
	return (
		<>
			<Header link={"/employee-list"} text={"View Current Employees"} title={"Create Employee"} />
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
