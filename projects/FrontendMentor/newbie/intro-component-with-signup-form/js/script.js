"use strict";

const form = document.getElementById("details-form");
const inputs = document.querySelectorAll("input");

for (const input of inputs) {
    // console.log(`${input.id} getting focus listener`)
    input.addEventListener("focus", inputFocused, false);
}
form.addEventListener("submit", checkFormValidity, false);

/**
 * @param {Event} event
 */
function checkFormValidity(event) {
    if (form.checkValidity() === false) {
        event.preventDefault();
        const invalids = form.querySelectorAll(":invalid");
        for (const input of invalids) {
            // console.log(`${input.id} is invalid`);
            // console.log(`${input.id} msg ${input.validationMessage}`);
            // get the relevant error message element, using id of the input
            let errorSection = document.getElementById(`errorMessage-${input.id}`)
            // console.log(`ES: ${errorSection}, ${typeof (errorSection)} id: ${errorSection.id}`);
            errorSection.removeAttribute("hidden");
            input.classList.add("error-highlight")
        }
    }
}

// When an input has focus I remove the error state,
// I could more ideally check if the class is in the classlist,
// and attribute hidden was false
function inputFocused(event) {
    const input = event.currentTarget;
    input.classList.remove("error-highlight");
    let errorSection = document.getElementById(`errorMessage-${input.id}`);
    errorSection.setAttribute("hidden", true);
}