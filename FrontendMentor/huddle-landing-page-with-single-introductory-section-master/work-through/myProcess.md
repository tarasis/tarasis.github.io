notes on how i approached this

downloaded
read readme
read style guide
created css file
added it to the html file
added font awesome to the html file
added fonts to the css file
added initial styling (fonts, background color, background image)
in html file I 
    added header
    added divs for sections (logo, middle, social media buttons)
    put divs around existing content (text for right side)
    added logo
    added mockup image
    added icons for social media
    saved it out
moved on to css
    adjust positioning based on how it looks on design
    got things roughly in position.
    pause for bed, however curious how I am in relation to design file
    realise I really can't match 1440x800 because the laptop I'm using is only 1366x768 (originally thought it was 2560x1440, page said only 1440 ... easy mistake. Had to look at design image for res)
go to sleep
next morning I realise
    chrome in developer mode allows you to create devices of specific resolutions
    set up 2, one 1440x800 and the other 375x800
    I can then save out the image and use diffchecker.com and use the design image vs the current image of the page to compare and see how close I am. You can use a diff mode that only shows the differences (mostly in green) which makes it easier to adjust.
    Now, now I need to finish styling for desktop ...
    remainder of day lost to calls and roleplaying
next day 
    download diffchecker trial rather than keep using website
    adjust size of logo svg
    play with positioning using margin and rem. Logo and mockup images are so close at this point (see image diff 1)
    ![alt](image-diff-1.png)
    realise I probably should be using % rather than rem for margin positioning
    also should probably be using 0 positioning in body and doing it in each element
    tweaked logo and mid section margins mixture rem & % for the moment
    set body to have 0 margin
    seemingly no changes are made with % unless they are to a pixel, so 4.86 is the same as 4.8611111, need to go to next px % which is 4.7916666667
    then lots and lots of iterating. Making changes and comparing in diffchecker against the design doc.
    Spent 2 hours+ on this. Too long.
    Still haven't quite nailed the blurb section.
        Basically the logo is slight off
        the differences between the mockup and symbols are image quality between jpg and png
        its like a pixel off with the social media buttons
    img-diff-2-desktop-near-enough.png
    ![alt](img-diff-2-desktop-near-enough.png)

    Still now on to the mobile variant. Can I nail it better?
    spent an age on this, lots of tweaking. Not quite there but nearly, so nearly

    ![alt](mob-img-diff-1.png)

    so. This is where I gave up.

    --
    Assessment: 

    Issues with going in the sizes between 375w and 1440w. Social buttons are no longer right aligned or center aligned.
    Still needs accessibility stuff

Things I've not touched so far:
    main section
    accessibility
    mobile