const loginForm = document.querySelector("form.login-form");
loginForm.addEventListener("submit", pushSubmit);

function pushSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill all fields");
  }
  const userLogin = { email: email.value, password: password.value };
  console.log(userLogin);
  event.currentTarget.reset();
}
