let isTooltipVisible = false;

function toggleTooltip() {
    const articleFooter = document.querySelector(".articleFooter");
    const articleImage = document.querySelector(".authorImage");
    const articleAuthorAndDate = document.querySelector(".nameAndDate");
    const articleShareButton = document.querySelector(".articleShareButton");
    const articleShareTooltip = document.querySelector(".articleShareButtonTooltip");
    const articleShareSection = document.querySelector(".articleShareSection");

    if (window.innerWidth <= 650) {
        if (isTooltipVisible) {
            articleFooter.classList.remove("backgroundDark");
            articleShareButton.classList.remove("buttonDark");
            articleShareSection.style.display = "none";
            articleImage.style.display = "block";
            articleAuthorAndDate.style.display = "block";
            isTooltipVisible = false;      
        } else {
            articleFooter.classList.add("backgroundDark");
            articleShareButton.classList.add("buttonDark");
            articleShareSection.style.display = "flex";
            articleImage.style.display = "none";
            articleAuthorAndDate.style.display = "none";
            isTooltipVisible = true;      
        }
    } else {
        if (isTooltipVisible) {
            articleShareButton.classList.remove("buttonDark");
            articleShareTooltip.style.display = "none";
            isTooltipVisible = false;    
        } else {
            articleShareButton.classList.add("buttonDark");
            articleShareTooltip.style.display = "flex";
            isTooltipVisible = true;
        }
    }
}