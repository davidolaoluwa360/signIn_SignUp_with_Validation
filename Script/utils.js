const template = document.querySelector(".reuseable-content-selector");
const clone = document.importNode(template.content, true);

class Registration {
  constructor(email, password, submit) {
    this.email = email;
    this.password = password;
    this.submit = submit;
  }
}

class SignIn extends Registration {
  constructor(rememberMe, forgetpassword) {
    let email = clone.querySelector(".Email-type");
    let password = clone.querySelector(".password");
    let submit = clone.querySelector(".Submit");
    super(email, password, submit);
    this.rememberMe = rememberMe;
    this.forgetpassword = forgetpassword;
  }

  userLogin() {
    const signinForm = document.querySelector("#signIn-Form");
    signinForm.appendChild(this.email);
    document
      .querySelector("#signIn-Form input[type='email']")
      .setAttribute("name", "signin-email");

    signinForm.appendChild(this.password);
    document
      .querySelector("#signIn-Form input[type='password']")
      .setAttribute("name", "signin-pass");

    signinForm.appendChild(this.rememberMe);
    document
      .querySelector("#signIn-Form input[type='checkbox']")
      .setAttribute("name", "signin-checkbox");

    signinForm.appendChild(this.submit);
    document
      .querySelector("#signIn-Form input[type='submit']")
      .setAttribute("name", "signin-submit");

    document.querySelector("#signIn-Form input[type='submit']").value = "Login";

    signinForm.appendChild(this.forgetpassword);
  }
}
const rememberMe = clone.querySelector(".Checkbox-remember-me");
const lostpassword = clone.querySelector(".forgot-password-container-selector");

const signUpClone = document.importNode(template.content, true);
class SignUp extends Registration {
  constructor(fullName, terms) {
    const email = signUpClone.querySelector(".Email-type");
    const password = signUpClone.querySelector(".password");
    const submit = signUpClone.querySelector(".Submit");
    super(email, password, submit);
    this.fullName = fullName;
    this.terms = terms;
  }

  userSignUp() {
    const signUpForm = document.querySelector("#signUp-Form");

    signUpForm.appendChild(this.fullName);
    document
      .querySelector("#signUp-Form input[type='text']")
      .setAttribute("name", "signupfullname");

    signUpForm.appendChild(this.email);
    document
      .querySelector("#signUp-Form input[type='email']")
      .setAttribute("name", "signupmail");

    signUpForm.appendChild(this.password);
    document
      .querySelector("#signUp-Form input[type='password']")
      .setAttribute("name", "signupPass");

    signUpForm.appendChild(this.terms);
    document
      .querySelector("#signUp-Form input[type='checkbox']")
      .setAttribute("name", "signUpTerms-Condition");

    signUpForm.appendChild(this.submit);
    document
      .querySelector("#signUp-Form input[type='submit']")
      .setAttribute("name", "signUpsubmit");

    document.querySelector("#signUp-Form input[type='submit']").value =
      "SignUp";
  }
}

const fullName = signUpClone.querySelector(".Fullname");
const terms = signUpClone.querySelector(".Checkbox");

function ForgetPassword(email, submit) {
  this.email = email;
  this.submit = submit;
}

const forgetpasswordclone = document.importNode(template.content, true);

ForgetPassword.prototype.cloneEmailPassword = function () {
  document
    .querySelector(".forget-password-inner-container")
    .appendChild(this.email);
  document
    .querySelector(
      ".forget-password-inner-container .Email-type input[type='email']"
    )
    .setAttribute("name", "forgetpasswordemail");

  document
    .querySelector(".forget-password-inner-container")
    .appendChild(this.submit);
  document
    .querySelector(
      ".forget-password-inner-container .Submit input[type='submit']"
    )
    .setAttribute("name", "forgetpasswordsubmit");
};

ForgetPassword.prototype.open = function () {
  const openforgetwindow = document.querySelector(
    ".forget-password-general-container"
  );
  openforgetwindow.style.display = "flex";
};

ForgetPassword.prototype.close = function () {
  const closeforgetwindow = document.querySelector(
    ".forget-password-general-container"
  );
  closeforgetwindow.style.display = "none";
};

const forgetpassword = new ForgetPassword(
  forgetpasswordclone.querySelector(".Email-type"),
  forgetpasswordclone.querySelector(".Submit")
);
