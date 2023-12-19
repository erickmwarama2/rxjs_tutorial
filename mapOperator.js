"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var of = require("rxjs").of;
of(1, 7, 3, 6, 2).pipe((0, rxjs_1.tap)(function (value) { return console.log('spy value', value); }), (0, rxjs_1.filter)(function (value) { return value > 5; }), (0, rxjs_1.map)(function (value) { return value * 2; })).subscribe(function (value) { return console.log(value); });
