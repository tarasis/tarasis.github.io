const form = document.getElementById("ratingForm");
const ratingSpan = document.getElementById("ratingSpan");

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
        //use a transition effect, plus a reduced motion version

        event.preventDefault();
    },
    false
);
