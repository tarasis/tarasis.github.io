"use strict";

let username = "octocat";
const apiURL = "https://api.github.com/users/";

const searchField = document.getElementById("search-field");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", getProfile);

window.document.addEventListener("DOMContentLoaded", getProfile);

async function getProfile() {
    try {
        addLoaderAnimation();

        if (searchField.value.length >= 1) {
            username = searchField.value;
        }

        let url = `${apiURL}${username}`;

        // const response = await fetch(url, {
        //     headers: {
        //         authorization: "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",
        //     },
        // });
        // console.log(response);
        // const data = await response.json();
        // RMCG following line for testing purposes so I don't keep
        // hitting the API
        const data = testData;

        console.log(data);

        // add fields to populate here
    } catch (error) {
        //do something, we got an error
        alert(
            `Something has gone wrong. Please try again shortly\n\n ${error}`
        );
        console.log("Error: " + error);

        removeLoaderAnimation();
    }
}

function addLoaderAnimation() {
    // button.children[0].classList.add("animate");
    setTimeout(() => {
        removeLoaderAnimation();
    }, 2000);
}

function removeLoaderAnimation() {
    // button.children[0].classList.remove("animate");
}

// example return from api call to https://api.github.com/users/tarasis

const testData = {
    login: "octocat",
    id: 583231,
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 7493,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2022-10-24T11:21:44Z",
};

// {
//     login: "tarasis",
//     id: 3006,
//     node_id: "MDQ6VXNlcjMwMDY=",
//     avatar_url: "https://avatars.githubusercontent.com/u/3006?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/tarasis",
//     html_url: "https://github.com/tarasis",
//     followers_url: "https://api.github.com/users/tarasis/followers",
//     following_url:
//         "https://api.github.com/users/tarasis/following{/other_user}",
//     gists_url: "https://api.github.com/users/tarasis/gists{/gist_id}",
//     starred_url: "https://api.github.com/users/tarasis/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/tarasis/subscriptions",
//     organizations_url: "https://api.github.com/users/tarasis/orgs",
//     repos_url: "https://api.github.com/users/tarasis/repos",
//     events_url: "https://api.github.com/users/tarasis/events{/privacy}",
//     received_events_url: "https://api.github.com/users/tarasis/received_events",
//     type: "User",
//     site_admin: false,
//     name: "Robert McGovern",
//     company: null,
//     blog: "http://tarasis.net",
//     location: "Northern Ireland",
//     email: null,
//     hireable: null,
//     bio: null,
//     twitter_username: "tarasis",
//     public_repos: 26,
//     public_gists: 2,
//     followers: 35,
//     following: 53,
//     created_at: "2008-03-13T16:12:38Z",
//     updated_at: "2022-10-28T19:21:49Z",
// };
