const email = document.querySelector("form input[type='email']");
const txtError = document.querySelector(".txt-error");

email.addEventListener(
  "invalid",
  (e) => {
    e.preventDefault();
    if (email.value == "") {
      txtError.innerHTML = "E-mail can't be empty";
    } else {
      txtError.innerHTML = "Please provide a valid email";
    }
  },
  false
);

email.addEventListener(
  "input",
  () => {
    txtError.innerHTML = "";
  },
  false
);
