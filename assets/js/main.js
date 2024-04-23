const form = document.querySelector("form");
const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const personalNum = document.querySelector("#personNum");
const mobileNum = document.querySelector("#mobileNum");
const nameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const personalNumError = document.querySelector("#personNum-error");
const mobileNumError = document.querySelector("#mobileNum-error");
const textarea = document.querySelector("#textarea");
const textareaError = document.querySelector("#textarea-error");
function checkUserName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Username is required";
    nameInput.classList.remove("correct");
    nameInput.classList.add("error");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("error");
    nameInput.classList.add("correct");
    return true;
  }
}

function checkEmail() {
  if (emailInput.validity.valid === false) {
    emailError.textContent = "Email is required";

    if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address";
    }
    emailInput.classList.remove("correct");
    emailInput.classList.add("error");

    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
    return true;
  }
}

function checkPassword() {
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    return false;
  } else if (/[a-zA-Z0-9]/.test(passwordInput.value) === false) {
    passwordError.textContent = "Password must contain numbers or letters";
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    return false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must contain at least 8 characters";
    passwordInput.classList.remove("correct");
    passwordInput.classList.add("error");
    return false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
    passwordInput.classList.add("correct");
    return true;
  }
}
function checkTel() {
  if (personalNum.validity.valid === false) {
    personalNumError.textContent = "Phone number is required";

    if (personalNum.validity.typeMismatch) {
      personalNumError.textContent = "Please enter a valid email address";
    }
    personalNum.classList.remove("correct");
    personalNum.classList.add("error");
    return false;
  } else if (/\d/.test(personalNum.value) === false) {
    personalNumError.textContent = "Phone number must contain numbers ";
    personalNum.classList.remove("correct");
    personalNum.classList.add("error");
    return false;
  } else if (/^\d{9}$/.test(personalNum.value) === false) {
    personalNumError.textContent = "";
    personalNum.classList.remove("error");
    personalNum.classList.add("correct");
    return false;
  } else if (personalNum.value.length !== 11) {
    personalNumError.textContent = "please enter a 11-digit number";
    personalNum.classList.remove("correct");
    personalNum.classList.add("error");
    return false;
  } else {
    personalNumError.textContent = "";
    personalNum.classList.remove("error");
    personalNum.classList.add("correct");
    return true;
  }
}

function checkMob() {
  if (mobileNum.validity.valid === false) {
    mobileNumError.textContent = "Mobile number is required";

    if (mobileNum.validity.typeMismatch) {
      mobileNumError.textContent = "Please enter a valid email address";
    }
    mobileNum.classList.remove("correct");
    mobileNum.classList.add("error");
    return false;
  } else if (/\d/.test(mobileNum.value) === false) {
    mobileNumError.textContent = "Mobile number must contain numbers ";
    mobileNum.classList.remove("correct");
    mobileNum.classList.add("error");
    return false;
  } else if (/^\d{9}$/.test(mobileNum.value) === false) {
    mobileNumError.textContent = "";
    mobileNum.classList.remove("error");
    mobileNum.classList.add("correct");
    return false;
  } else if (mobileNum.value.length !== 9) {
    mobileNumError.textContent = "please enter a 9-digit number";
    mobileNum.classList.remove("correct");
    mobileNum.classList.add("error");
    return false;
  } else {
    mobileNumError.textContent = "";
    mobileNum.classList.remove("error");
    mobileNum.classList.add("correct");
    return true;
  }
}
function Checktextarea() {
  if (textarea.value.trim() === "") {
    textareaError.textContent = "please fill description ";
    textarea.classList.remove("correct");
    textarea.classList.add("error");
    return false;
  } else {
    textareaError.textContent = "";
    textarea.classList.remove("error");
    textarea.classList.add("correct");
    return true;
  }
}

nameInput.addEventListener("input", checkUserName);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", checkPassword);
personalNum.addEventListener("input", checkTel);
mobileNum.addEventListener("input", checkMob);
textarea.addEventListener("input", Checktextarea);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(nameInput.validity);
  // console.log(emailInput.value);
  // console.log(emailInput.validity);
  // console.log(passwordInput.validity);
  const isUserNameValid = checkUserName();
  const isEmailValid = checkEmail();
  const isPAsswordValid = checkPassword();
  const isPhonenumValid = checkTel();
  const ismobileNumValid = checkMob();
  const isTextValid = Checktextarea();
  // if true then submit the form

  if (
    isUserNameValid &&
    isEmailValid &&
    isPAsswordValid &&
    isPhonenumValid &&
    ismobileNumValid &&
    isTextValid
  ) {
    form.submit();
  } else {
    showSelectedModal("#sign-up-error-modal");
  }
});

const openModal = document.querySelector(".open-sign-in");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const dialog = document.querySelector("dialog");

const closeDialog = dialog.querySelector(".modal-close");

openModal.addEventListener("click", () => {
  // modal.classList.add("open");
  // showSelectedModal("#sign-up-modal");

  dialog.show();
});

closeDialog.addEventListener("click", (e) => {
  dialog.close();
});

// closeModal.addEventListener("click", () => {
// 	modal.classList.remove("open");
// });

function showSelectedModal(selector) {
  const modal = document.querySelector(selector);
  const closeBtn = modal.querySelector(".modal-close");
  if (modal) {
    modal.classList.add("open");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }
}
