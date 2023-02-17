const loginForm = document.querySelector("form.login-form");
loginForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;
	if (email.value && password.value) {
		const userLogin = { email: email.value, password: password.value };
		console.log(userLogin);
		event.currentTarget.reset();
	} else {
		alert("Please fill all fields");
	}
});
