const login = new SignIn(rememberMe, lostpassword);
const signinForm = document.querySelector("#signIn-Form");
const signInLinkstyle = document.querySelector(
  ".switch-signIn-signUp .switch-signIn"
);
login.userLogin();

const signup = new SignUp(fullName, terms);
const signUpForm = document.querySelector("#signUp-Form");
const signUpLinkstyle = document.querySelector(
  ".switch-signIn-signUp .signup-click-Event"
);

signInLinkstyle.addEventListener("click", function () {
  document.querySelector("head title").textContent = "SignIn";

  signinForm.style.display = "block";
  signUpForm.style.display = "none";

  const linkstyle = () => {
    signInLinkstyle.style.color = "white";
    signInLinkstyle.style.borderBottom = "2px solid #6ee1cb";
    signUpLinkstyle.style.color = "rgba(255, 255, 255, 0.5)";
    signUpLinkstyle.style.borderBottom = "";
    document
      .querySelectorAll(".toggle-toggle-text")
      .forEach((elements) => (elements.textContent = "Sign In"));
  };

  linkstyle();
  login.userLogin();
});

//======================== SignIn validation start from here =========================================
const formSignIn = document.querySelector(
  ".form-container-general-selector #signIn-Form"
);

formSignIn.addEventListener("submit", (event) => {
  const emailError = clone.querySelector(".email-error");
  const passwordError = clone.querySelector(".password-error");

  const emailElement = document.querySelector(
    ".form-container-general-selector #signIn-Form .email-error"
  );

  const passwordElement = document.querySelector(
    ".form-container-general-selector #signIn-Form .password-error"
  );

  if (!document.body.contains(emailElement)) {
    document
      .querySelector(
        ".form-container-general-selector #signIn-Form .Email-type"
      )
      .appendChild(emailError);

    emailError.style.color = "white";
  }

  if (!document.body.contains(passwordElement)) {
    document
      .querySelector(".form-container-general-selector #signIn-Form .password")
      .appendChild(passwordError);

    passwordError.style.color = "white";
  }

  const email = formSignIn.elements["signin-email"];
  const password = formSignIn.elements["signin-pass"];

  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  try {
    if (email.value.match(emailRegex)) {
      emailElement.textContent = null;
      email.style.borderBottom = "1px solid white";
    } else if (email.value === "") {
      emailElement.textContent = "Email must not be empty!!";
      email.style.borderBottom = "1px solid #6ee1cb";
    } else {
      emailElement.textContent = email.value + " is not of type email";
      email.style.borderBottom = "1px solid #6ee1cb";
    }

    if (password.value === "") {
      passwordElement.textContent = "password must not be empty!!";
      password.style.borderBottom = "1px solid #6ee1cb";
    }
    // here, change the validation to your needs, connect it to your database to check if the password exist
    else {
      passwordElement.textContent = "password seems to not exist in our record";
      password.style.borderBottom = "1px solid #6ee1cb";
    }
  } catch (error) {
    console.log("Error: " + error);
  }

  event.preventDefault();
});

// ===================================================================================================

// ============================== Sign Up Display with Validation ====================================
signUpLinkstyle.addEventListener("click", function () {
  document.querySelector("head title").textContent = "SignUp";
  signinForm.style.display = "none";
  signUpForm.style.display = "block";

  const linkstyle = () => {
    signInLinkstyle.style.color = "rgba(255, 255, 255, 0.5)";
    signInLinkstyle.style.borderBottom = "";
    signUpLinkstyle.style.color = "white";
    signUpLinkstyle.style.borderBottom = "2px solid #6ee1cb";
    document
      .querySelectorAll(".toggle-toggle-text")
      .forEach((elements) => (elements.textContent = "Sign Up"));
  };

  linkstyle();
  signup.userSignUp();

  const formSignUp = document.querySelector(
    ".form-container-general-selector #signUp-Form"
  );

  formSignUp.addEventListener("submit", (event) => {
    const fullNameError = signUpClone.querySelector(".fullname-error");
    const emailError = signUpClone.querySelector(".email-error");
    const passwordError = signUpClone.querySelector(".password-error");

    const fullNameElement = document.querySelector(
      ".form-container-general-selector #signUp-Form .fullname-error"
    );
    const emailElement = document.querySelector(
      ".form-container-general-selector #signUp-Form .email-error"
    );
    const passwordElement = document.querySelector(
      ".form-container-general-selector #signUp-Form .password-error"
    );

    if (!document.body.contains(fullNameElement)) {
      document
        .querySelector(
          ".form-container-general-selector #signUp-Form .Fullname"
        )
        .appendChild(fullNameError);
      fullNameError.style.color = "white";
    }

    if (!document.body.contains(emailElement)) {
      document
        .querySelector(
          ".form-container-general-selector #signUp-Form .Email-type"
        )
        .appendChild(emailError);
      emailError.style.color = "white";
    }

    if (!document.body.contains(passwordElement)) {
      document
        .querySelector(
          ".form-container-general-selector #signUp-Form .password"
        )
        .appendChild(passwordError);
      passwordError.style.color = "white";
    }

    const fullName = formSignUp.elements["signupfullname"];
    const email = formSignUp.elements["signupmail"];
    const password = formSignUp.elements["signupPass"];

    const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    try {
      if (fullName.value === "") {
        fullNameElement.textContent = "full name must not be empty!!";
        fullName.style.borderBottom = "1px solid #6ee1cb";
      } else {
        fullNameElement.textContent = null;
        fullName.style.borderBottom = "1px solid white";
      }

      if (email.value.match(emailRegex)) {
        emailElement.textContent = null;
        email.style.borderBottom = "1px solid white";
      } else if (email.value === "") {
        emailElement.textContent = "Email must not be empty!!";
        email.style.borderBottom = "1px solid #6ee1cb";
      } else {
        emailElement.textContent = email.value + " is not of type email";
        email.style.borderBottom = "1px solid #6ee1cb";
      }

      if (password.value === "") {
        passwordElement.textContent = "Password must not be empty!!";

        password.style.borderBottom = "1px solid #6ee1cb";
      } else if (password.value.match(passwordRegex)) {
        passwordElement.textContent = null;

        password.style.borderBottom = "1px solid white";
      } else {
        passwordElement.textContent =
          "Password must be between 7 to 16 characters which contain only characters";
        password.style.borderBottom = "1px solid #6ee1cb";
      }
    } catch (error) {
      console.log("Error: " + error);
    }

    event.preventDefault();
  });
});

const openforgetpasswordBTN = document.querySelector(
  ".forgot-password-container-selector .forgot-password"
);
const closeforgetpasswordBTN = document.querySelector(".close-forget-password");

openforgetpasswordBTN.addEventListener("click", () => {
  forgetpassword.open();
  forgetpassword.cloneEmailPassword();
});
closeforgetpasswordBTN.addEventListener("click", forgetpassword.close);
