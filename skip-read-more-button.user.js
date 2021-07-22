// ==UserScript==
// @name         Skip "Read More" button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kesong Cao
// @match        https://magic.iswbm.com/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

const myFunction = () => {
    setTimeout(() => {
        const readMoreElem = document.getElementById("read-more-wrap");
        //console.log(readMoreElem);
        if (readMoreElem) {
            readMoreElem.remove();
        }

        const rstContentElems = document.getElementsByClassName("rst-content");
        //console.log(rstContentElems, rstContentElems.length);
        if (rstContentElems) {
            for (const elem of rstContentElems) {
                 elem.style.overflow = "scroll";
            }
        }
    }, 1000); // wait until "readmore.js" is executed, is there a better way to do this?
};

(function() {
    'use strict';

    if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
       myFunction();
    } else {
        document.addEventListener("DOMContentLoaded", myFunction);
    }
})();

