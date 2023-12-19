"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var randomName$ = (0, rxjs_1.from)(axios_1.default.get('https://random-data-api.com/api/name/random_name')).pipe((0, rxjs_1.map)(function (ajaxRes) { return ajaxRes.data.first_name; }));
var randomNation$ = (0, rxjs_1.from)(axios_1.default.get('https://random-data-api.com/api/nation/random_nation')).pipe((0, rxjs_1.map)(function (ajaxRes) { return ajaxRes.data.capital; }));
var randomFood$ = (0, rxjs_1.from)(axios_1.default.get('https://random-data-api.com/api/food/random_food')).pipe((0, rxjs_1.map)(function (ajaxRes) { return ajaxRes.data.dish; }));
// randomName$.subscribe(value => console.log(value));
// randomNation$.subscribe(value => console.log(value));
// randomFood$.subscribe(value => console.log(value));
(0, rxjs_1.forkJoin)([randomName$, randomNation$, randomFood$]).subscribe(function (_a) {
    var firstName = _a[0], capital = _a[1], dish = _a[2];
    return console.log("".concat(firstName, " is from ").concat(capital, " and likes to eat ").concat(dish));
});
