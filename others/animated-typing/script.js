class Typewriter {
    constructor(el, options) {
        this.el = el;
        this.words = [...this.el.dataset.typewriter.split(",")];

        this.speed = options?.speed || 100;
        this.delay = options?.delay || 1000;
        this.repeat = options?.repeat || false;

        this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    toggleTyping = () => this.el.classList.toggle("typing");

    async typewrite(word) {
        await this.wait(this.delay);
        this.toggleTyping();

        for (const letter of word.split("")) {
            this.el.textContent += letter;
            await this.wait(this.speed);
        }

        this.toggleTyping();
        await this.wait(this.delay);

        this.toggleTyping();
        while (this.el.textContent.length !== 0) {
            this.el.textContent = this.el.textContent.slice(0, -1);
            await this.wait(this.speed);
        }

        this.toggleTyping();
    }

    async initTyping() {
        for (const word of this.words) {
            await this.typewrite(word);
        }

        if (this.repeat) {
            await this.initTyping();
        } else {
            this.el.style.animation = "none";
        }

        // can't use forEach with await
        // this.words.forEach((word) => {
        //     await this.typewrite(word);
        // });
    }
}

// const el1 = new Typewriter(document.querySelector("[data-typewriter]"), {
//     speed: 10,
//     delay: 10,
//     repeat: true,
// });
// console.log(el1);

document.querySelectorAll("[data-typewriter]").forEach((el) => {
    new Typewriter(el, {
        repeat: true,
    });
});
