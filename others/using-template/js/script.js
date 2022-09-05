// * https://jsonplaceholder.typicode.com/users

const userCardTemplate = document.querySelector("[data-user-template]");
// console.log(userCardTemplate);

const userCardsContainer = document.querySelector(
    "[data-user-cards-container]"
);
// console.log(userCardsContainer);

// Original code from video used the attribute for the query rather
// than the ID that he had setup. So I swapped it over.
// const searchInput = document.querySelector("[data-search]");
const searchInput = document.querySelector("#search");
// console.log(searchInput);

let users = []; // filed from user data retrieved from server

searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    // console.log(users);
    users.forEach((user) => {
        // this seems wasteful to run toLowerCase each time you type a letter
        // surely better to just store a lowercase version when saving original data
        // const isVisible =
        //     user.name.toLowerCase().includes(value) ||
        //     user.email.toLowerCase().includes(value);

        const isVisible =
            user.lowercaseName.includes(value) ||
            user.lowercaseEmail.includes(value);

        user.element.classList.toggle("hide", !isVisible);
    });
});

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        users = data.map((user) => {
            const card = userCardTemplate.content.cloneNode(true).children[0];

            const name = card.querySelector("[data-name]");
            const email = card.querySelector("[data-email]");

            name.textContent = user.name;
            email.textContent = user.email;

            // console.log(card);

            userCardsContainer.append(card);

            // Below is original return
            // return { name: user.name, email: user.email, element: card };
            return {
                name: user.name,
                email: user.email,
                lowercaseName: user.name.toLowerCase(),
                lowercaseEmail: user.email.toLowerCase(),
                element: card,
            };
        });
    });
