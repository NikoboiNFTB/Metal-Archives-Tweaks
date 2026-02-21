// ==UserScript==
// @name         Metal Archives - Expand All Lyrics
// @namespace    https://github.com/NikoboiNFTB/Metal-Archives-Tweaks/
// @downloadURL  https://github.com/NikoboiNFTB/Metal-Archives-Tweaks/raw/refs/heads/main/expand-all-lyrics.user.js
// @version      1.4
// @description  Shift + click any "Show lyrics" to expand all track lyrics. Can also close all lyrics.
// @author       Nikoboi
// @match        https://www.metal-archives.com/albums/*
// @grant        none
// @icon         https://addons.mozilla.org/user-media/addon_icons/2975/2975239-64.png?modified=588b067c
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'A' && target.id.startsWith('lyricsButton') && e.shiftKey) {
            e.preventDefault();

            const buttons = document.querySelectorAll('a[id^="lyricsButton"]');

            buttons.forEach((btn, index) => {
                if (btn !== target) {
                    setTimeout(() => btn.click(), index * 50);
                }
            });
        }
    }, true);
})();
