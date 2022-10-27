const form = document.getElementById("ratingForm");
const ratingSpan = document.getElementById("ratingSpan");
const buttonSubmit = document.getElementById("buttonSubmit");

const frontSection = document.getElementById("rating-component-front");
const backSection = document.getElementById("rating-component-back");

console.log(form);

form.addEventListener(
    "submit",
    (event) => {
        const data = new FormData(form);
        let output = "";
        for (const entry of data) {
            output = `${entry[1]}`;
        }
        ratingSpan.innerText = output;

        //hide first section, make second section visible
        if (output != "") {
            frontSection.classList.add("hidden");
            backSection.classList.remove("hidden");
        } else {
            /*
            Blur is used to remove the focus from the button that
            we prevent from working because the user didn't select
            a rating. Should probably add an error message, even
            though its not in the design spec.
            */
            buttonSubmit.blur();
        }
        //use a transition effect, plus a reduced motion version

        event.preventDefault();
    },
    false
);
