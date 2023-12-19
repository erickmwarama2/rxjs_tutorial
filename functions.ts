import { Observable, of } from "rxjs";

// of('Alice', 'Ben', 'Charlie').subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('complete')
// });

const names = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
});

// names.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('complete')
// });

function creationFunction(...args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
        for (let i = 0; i < args.length; i++) {
            subscriber.next(args[i]);
        }

        subscriber.complete();
    });
}

creationFunction('Alice', 'Ben', 'Charlie').subscribe({
    next: value => console.log(value),
    complete: () => console.log('complete function')
});