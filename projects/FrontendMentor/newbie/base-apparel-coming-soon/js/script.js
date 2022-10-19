"uses strict";

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

emailForm.addEventListener("submit", checkEmailValidity, false);
emailInput.addEventListener("focus", inputFocused, false);

/**
 * @param   {[Event]}  event
 */
function checkEmailValidity(event) {
    if (emailForm.checkValidity() === false) {
        event.preventDefault();
        emailInput.classList.add("error-border");
        errorMessage.classList.add("error-visible");
    } else {
        emailInput.classList.remove("error-border");
        errorMessage.classList.remove("error-visible");
    }
}

// When an input has focus I remove the error state,
function inputFocused(event) {
    /**
     * Just for VS Code intellisense
     *
     * @type {HTMLInputElement}
     */
    const input = event.currentTarget;
    if (input.classList.contains("error-border")) {
        input.classList.remove("error-border");
        errorMessage.classList.remove("error-visible");
    }
}
