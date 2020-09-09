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
* Blah