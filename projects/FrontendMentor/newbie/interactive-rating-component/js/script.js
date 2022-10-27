const form = document.getElementById("ratingForm");
const ratingSpan = document.getElementById("ratingSpan");

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
        frontSection.classList.add("hidden");
        backSection.classList.remove("hidden");
        //use a transition effect, plus a reduced motion version

        event.preventDefault();
    },
    false
);
