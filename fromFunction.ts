import axios from "axios";
import { from } from "rxjs";

// axios.get();

// from(['Alice', 'Ben', 'Charlie']).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('completed'),
// });

const somePromise = new Promise((resolve, reject) => {
    // resolve('Resolved');
    reject('Rejected');
});

const fromPromise$ = from(somePromise);
fromPromise$.subscribe({
    next: value => console.log(value),
    error: error => console.log('Error: ', error),
    complete: () => console.log('completed'),
});