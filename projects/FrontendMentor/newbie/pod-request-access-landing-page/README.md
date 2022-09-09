# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Pod request access landing page solution](#frontend-mentor---pod-request-access-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

Here are the screenshots for the complete project. First is the mobile version running at 375x667
![mobile](./screenshots/mobile.png)

Then the tablet version 768x1024

![tablet](./screenshots/tablet.png)

Then the desktop version, first without the error state and then with the error state

![tablet](./screenshots/desktop.png)
![tablet](./screenshots/desktop_with_error.png)

### Links

- Solution URL: [Github](https://github.com/tarasis/tarasis.github.io/tree/main/projects/FrontendMentor/newbie/pod-request-access-landing-page)
- Live Site URL: [Github.io](https://tarasis.github.io/FrontendMentor/newbie/pod-request-access-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

The approach to this was more difficult than any of the Frontend Mentor challenges that I had approached so far. Basically till now I've only approached the newbie free projects (sometimes working with the figma design file and sometimes not).

Now I have to think about Mobile, Tablet, and Desktop; rather than just Mobile and Desktop.

Also interesting was working without a style guide document + figma doc. This time I just had the figma document, so I had to make more notes for myself. Interesting particularly because it wasn't clear from the design section what weights of Chivo I needed.

I ended up using fixed values for position between the three version with I concede is problematic.

I tried to use properties a lot so that I can just change the values in the `:root` for each media section. I got a little sloppy towards the end and haven't moved all the values I can into properties. I find that using properties leads to a cleaner CSS file and easier cognitive load.

For email validation I simply used a pattern set on the input field, and then a combination of `:invalid`, `:valid` and `:placeholder-shown` to affect whether the formatting error is show; rather than taking a JavaScript approach. This does mean I have only implemented one of the two error states. (Honestly I had missed there was a second till I was working on this readme)

### Continued development

Focus on improving positioning when dealing with three different formats.

### Useful resources

- [Codepen showing CSS pattern matching & errors](https://codepen.io/jh3y/pen/yLKMOBm) - Found this method of handling error handling for input fields.

## Author

- Blog - [Robert McGovern Blog](https://tarasis.net)
- Portfolio - [Robert McGovern Portfolio](https://rmcg.dev)
- Frontend Mentor - [@tarasis](https://www.frontendmentor.io/profile/tarasis)
- Twitter - [@tarasis](https://www.twitter.com/tarasis)
