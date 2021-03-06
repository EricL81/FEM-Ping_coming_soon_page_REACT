import React, { useState } from "react";
import classes from "./EmailForm.module.css";

const EmailForm = () => {
	const [email, setEmail] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState("");

	const onChangeHandler = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

		if (!emailRegex.test(email) || !email) {
			setIsValid(false);
			setMessage("Please provide a valid email address");
		} else {
			setIsValid(true);
			setMessage("");
		}
	};

	return (
		<form className={classes.emailForm} onSubmit={onSubmitHandler}>
			<div className={classes.input}>
				<input className={`${!isValid ? classes.outlineError : ""}`} type="text" placeholder="Your email address..." onChange={onChangeHandler} />
				<div className={`${classes.message} ${!isValid ? classes.error : ""}`}>{message}</div>
			</div>
			<button>Notify Me</button>
		</form>
	);
};

export default EmailForm;
