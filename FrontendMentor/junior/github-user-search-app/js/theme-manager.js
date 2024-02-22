const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", toggleTheme);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.setAttribute("data-theme", themeName);
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
        document.getElementById("theme-toggle").checked = false;
    } else {
        setTheme("theme-light");
        document.getElementById("theme-toggle").checked = true;
    }
})();
