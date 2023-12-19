"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var triggerButton = document.getElementById("trigger");
if (triggerButton) {
    (0, rxjs_1.fromEvent)(triggerButton, 'click').subscribe(function (event) { return console.log(event); });
}
