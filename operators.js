"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var newsFeed$ = new rxjs_1.Observable(function (subscriber) {
    setTimeout(function () {
        subscriber.next({ category: 'Business', content: 'A' });
    }, 1000);
    setTimeout(function () {
        subscriber.next({ category: 'Sports', content: 'B' });
    }, 3000);
    setTimeout(function () {
        subscriber.next({ category: 'Business', content: '' });
    }, 4000);
    setTimeout(function () {
        subscriber.next({ category: 'Sports', content: 'D' });
    }, 6000);
    setTimeout(function () {
        subscriber.next({ category: 'Business', content: 'E' });
    }, 8000);
    setTimeout(function () {
        subscriber.next({ category: 'Sports', content: 'F' });
    }, 9000);
});
var sportsNewsFeed$ = newsFeed$.pipe((0, rxjs_1.filter)(function (item) { return item.category === 'Sports'; }));
sportsNewsFeed$.subscribe({
    next: function (value) {
        console.log(value);
    },
    error: function () {
        console.log('error');
    },
    complete: function () {
        console.log('complete');
    }
});
