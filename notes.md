# Notes

## Overview
---

Aim of this document is to make notes of various things as I encounter them. Consider it learning from working through specific challenges or other exercises. Probably should be in a note app, or a wiki, or something, but for now they are here.

Think of it as a combination of learning, and tips and tricks. They will start unorganised, and then should be put into some semblance of order; where that is possible. 

## The Notes Themselves (unorganised)
---

* Now little difference between `<input type="submit">` and `<button>`. 
  * It used to be the case that IE6 didn't properly support it, so your website would look broken.
  * By default `<button>` implies `type="submit"`
  * A `button` can have child elements, an `<input type="submit">` can't. (**verify**) 

* When using `em` the increases are compound, so if you have a `p`, inside a `div`, inside `body`. The `body` font size is set in `px`. The `div` and `p` both set a font size using `em` to set a relative size, then that relative size would be
    * in `div`: body font size * font size em
    * in `p`: div relative font size * p's font size in em
  * ```css
    body {
        font-size: 20px;
    }

    div {
        font-size: 2em; /* font size is 40px */
    }

    p {
        font-size: 2em; /* font size in this div is now 80px  */
    }
    ```

* Random aside: can't carry on a list after putting a codeblock inside a list
* Found useful site for Regex writing / testing https://regex101.com
    * this specific address has regex for email validation https://regex101.com/r/uP2oL7/1

* CSS - The "!important" rule should only be used as a last resort - nuclear option
    * better to do elementName.className when wanting to temp add a class to override some css (like say a border color)

* Blah

## Articles

* https://www.freecodecamp.org/news/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26/
* https://thoughtbot.com/blog/transitions-and-transforms
* https://www.sitepoint.com/hide-elements-in-css/
* https://www.markheath.net/post/font-awesome-circle-background
* https://matthewjamestaylor.com/responsive-banner-ads
* https://uxengineer.com/padding-vs-margin/
* http://specificity.keegan.st/
* https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
* https://css-tricks.com/how-do-you-do-max-font-size-in-css/
* https://css-tricks.com/simplified-fluid-typography/

## Useful Links

* http://www.heropatterns.com/ << Free repeatable background SVG's

## API's to test with

* https://api.chucknorris.io/jokes/random
* https://jsonplaceholder.typicode.com/