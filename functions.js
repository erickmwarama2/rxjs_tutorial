"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// of('Alice', 'Ben', 'Charlie').subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('complete')
// });
var names = new rxjs_1.Observable(function (subscriber) {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
});
// names.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('complete')
// });
function creationFunction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new rxjs_1.Observable(function (subscriber) {
        for (var i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    });
}
creationFunction('Alice', 'Ben', 'Charlie').subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('complete function'); }
});
