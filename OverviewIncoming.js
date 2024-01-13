// ==UserScript==
// @name         Overview_incomings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://w21.crownofthegods.com/overview/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    'use strict';

    //works, if it doesnt, might be the ordering of scripts
    setInterval(function () {

        var URL = "https://w21.crownofthegods.com/overview/incover.php";

        document.getElementById("incatk").click();

        function aGet(url, cb) {
            var x = new XMLHttpRequest();
            x.onload = function (e) {
                // cb(x.responseText)
                cb(JSON.parse(x.responseText))
            };
            x.onerror = function (e) {
                alert("Error fetching " + url);
            };
            x.open("GET", url, true);
            x.send();
        }

        var dmp = console.log.bind(console); // Dummy callback to dump to console
        aGet(URL, dmp); // Fails, uses onerror to trigger alert

    }, 10000);



})();