"use strict";

const console = window.console;
const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");
const errorSection = document.getElementById("errorSection");
const notifyButton = document.getElementById("notifyButton");

const errorMessageForgotAddress = "Whoops! It looks like you forgot to add your email";
const errorMessageInvalidAddress = "Please provide a valid email address";

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


/*
* Don't quite see the point in this, setting "type=email" does some validation
* Setting the input to "required" prevents submitting an empty field
*
* Only benefit I see is the being able to set an error message
* Maybe one form of solution is doing exactly that. Use onclick event on the button
*   if the field is empty, unhide the error field 
*/
function validateEmailAddress() {
    const submittedEmailAddress = document.forms.emailForm.emailInput.value;
    // test email is valid via regex
    const isValidEmailAddress = validEmailFormat.test(submittedEmailAddress);

    if (submittedEmailAddress.length === 0) {
        showError(errorMessageForgotAddress);
        return false;
    } else if (!isValidEmailAddress) {
        showError(errorMessageInvalidAddress);    
        return false;
    } else {
        return true;
    }
}

function showError(message) {
    errorMessage.innerText = message;
    errorMessage.classList.add("visible");
    emailInput.classList.add("errorBorder");
    notifyButton.classList.add("notifyError");
    // errorSection.hidden = false;
}

/*
* (Possibly) To be called as user types in the email field. If an error message has been shown, 
* then hide the message and return the fields to normal 
*/
function clearError() {
    errorMessage.classList.remove("visible");
    emailInput.classList.remove("errorBorder");
    notifyButton.classList.remove("notifyError");
    // errorSection.hidden = true;
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