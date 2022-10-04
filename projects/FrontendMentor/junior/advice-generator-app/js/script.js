// api used is at https://api.adviceslip.com
// specifically https://api.adviceslip.com/advice
// which takes a callback parameter
// advice is cached for 2 seconds
// so my plan is to disable the button for those
// 2 seconds
"use strict";

const title = document.getElementById("advice__title");
const quote = document.getElementById("advice__quote");
const button = document.getElementById("advice__button");

button.addEventListener("click", getAdvice);

window.document.addEventListener("DOMContentLoaded", getAdvice);

/**
 * [buttonClicked description]
 *
 * @param   {[Event]}  anEvent  [anEvent description]
 */
async function getAdvice() {
    try {
        addAnimation();

        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        // verify its a slip
        if (data.slip) {
            title.textContent = `Advice #${data.slip.id}`;
            quote.textContent = `“${data.slip.advice}”`;
        } else {
            // If for some reason the server sends a message type
            // back rather than a slip
            alert(`Something went wrong.\n\n${data.message.text}`);

            removeAnimation();
        }
        // otherwise something horrible went wrong
    } catch (error) {
        alert(`Something has gone seriously wrong. HELP!!!!!\n\n ${error}`);

        removeAnimation();
    }
}

function addAnimation() {
    button.children[0].classList.add("animate");
    setTimeout(() => {
        removeAnimation();
    }, 2000);
}

function removeAnimation() {
    button.children[0].classList.remove("animate");
}
