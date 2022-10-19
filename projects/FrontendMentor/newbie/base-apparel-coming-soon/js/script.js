"uses strict";

/*
 * this is my "simple" regex for email addresses. It does not cover all the possibilities that are allowed
 * for the local and domain parts. For a more "correct" / comprehensive regex, there is one at
 * https://stackoverflow.com/questions/3844431/are-email-addresses-allowed-to-contain-non-alphanumeric-characters
 *
 * For local part you can use ASCII:
 *   Latin letters A - Z a - z
 *   digits 0 - 9
 *   special characters !#$%&'*+-/=?^_`{|}~
 *   dot ., that it is not first or last, and not in sequence
 *   space and "(),:;<>@[] characters are allowed with restrictions (they are only allowed inside a quoted string, a backslash or double-quote must be preceded by a backslash)
 *   Plus since 2012 you can use international characters above U+007F, encoded as UTF-8.
 *
 * Domain part is more restricted:
 *   Latin letters A - Z a - z
 *   digits 0 - 9
 *   hyphen -, that is not first or last, multiple hyphens in sequence are allowed.
 *
 * Recommended regex is: ^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})
 */
const validEmailFormat = /^[A-Za-z0-9][\w\+]*@[A-Za-z0-9]{3,}\.[A-Za-z]{2,}$/i;

const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("errorMessage");
const errorIcon = document.getElementById("error-icon");

submitButton.addEventListener("click", checkEmailValidity, false);
emailInput.addEventListener("focus", inputFocused, false);

/**
 * @param   {[Event]}  event
 */
function checkEmailValidity(event) {
    if (validateEmailAddress() === false) {
        event.preventDefault();
        emailInput.classList.add("error-border");
        errorMessage.classList.add("error-visible");
        errorIcon.classList.add("error-visible");
    } else {
        emailInput.classList.remove("error-border");
        errorMessage.classList.remove("error-visible");
    }
}

/*
 */
function validateEmailAddress() {
    const submittedEmailAddress = emailInput.value;
    // test email is valid via regex
    const isValidEmailAddress = validEmailFormat.test(submittedEmailAddress);

    if (submittedEmailAddress.length === 0) {
        return false;
    } else if (!isValidEmailAddress) {
        return false;
    } else {
        return true;
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
        errorIcon.classList.remove("error-visible");
    }
}

function testRegex() {
    console.log("Should all be false");
    console.log(validEmailFormat.test("submittedEmailAddress"));
    console.log(validEmailFormat.test("s@.NET"));
    console.log(validEmailFormat.test("@"));
    console.log(validEmailFormat.test("@."));
    console.log(validEmailFormat.test("@.net"));
    console.log(validEmailFormat.test("@tarasis.net"));
    console.log(validEmailFormat.test("adsadasds@"));
    console.log(validEmailFormat.test("__submittedEmailAddress"));
    console.log(validEmailFormat.test("spam@tarasis.99"));
    console.log(validEmailFormat.test("rob@.net"));
    console.log(validEmailFormat.test("spam@tarasis"));
    console.log(validEmailFormat.test("spam@tarasis.a"));
    console.log(validEmailFormat.test("s@ta.net"));
    console.log(validEmailFormat.test("_@tarasis.net"));
    console.log(validEmailFormat.test("_3@tarasis.net"));

    console.log("\n Should all be true");
    console.log(validEmailFormat.test("spam@tarasis.net"));
    console.log(validEmailFormat.test("rob@tad.io"));
    console.log(validEmailFormat.test("s@tarasis.net"));
    console.log(validEmailFormat.test("s@tarasis.net"));
    console.log(validEmailFormat.test("s_@tarasis.net"));
    console.log(validEmailFormat.test("s+blah@tarasis.net")); // this can be true, some servers use this for filtering
}

// testRegex();
