window.onload = function () {
    "use strict";
    const form = document.getElementById("form");
    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");
    const outputUser = document.querySelector(".output__user");
    const outputPass = document.querySelector(".output__pass");

    form.onsubmit = function (e) {
        e.preventDefault();
        validateForm();
    };

    function validateForm() {
        const userNameValue = userNameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (userNameValue === "" && passwordValue === "") {
            displayMessage("No username entered.", true);
        } else {
            removeError(userNameInput);
        }

        if (userNameValue !== "" && passwordValue === "") {
            displayMessage("No password entered.", true);
        } else {
            removeError(passwordInput);
        }
        if (userNameValue === "" && passwordValue !== "") {
            displayMessage("No username entered.", true);
        } else {
            removeError(userNameInput);
        }

        if (userNameValue !== "" && passwordValue !== "") {
            const result = checkLogin(userNameValue, passwordValue);
            displayMessage(result);
        }
    }

    function displayMessage(message, autofocus) {
        outputUser.textContent = message;
        outputPass.textContent = "";
        document.querySelector(".output").style.display = "block";

        if (message === "Welcome back") {
            userNameInput.value = ""; // Clear username field on successful login
            passwordInput.value = ""; // Clear password field on successful login
        }

        if (autofocus && message !== "Welcome back") {
            userNameInput.focus();
        }
    }

    function removeError(element) {
        element.classList.remove("login__txtbox_error");
    }
};