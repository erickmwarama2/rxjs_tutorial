"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// axios.get();
// from(['Alice', 'Ben', 'Charlie']).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('completed'),
// });
var somePromise = new Promise(function (resolve, reject) {
    // resolve('Resolved');
    reject('Rejected');
});
var fromPromise$ = (0, rxjs_1.from)(somePromise);
fromPromise$.subscribe({
    next: function (value) { return console.log(value); },
    error: function (error) { return console.log('Error: ', error); },
    complete: function () { return console.log('completed'); },
});
