import { Observable, filter } from "rxjs";

interface NewItem {
    category: 'Business' | 'Sports';
    content: string;
}

const newsFeed$ = new Observable<NewItem>(subscriber => {
    setTimeout(() => {
        subscriber.next({ category: 'Business', content: 'A'})
    }, 1000);

    setTimeout(() => {
        subscriber.next({ category: 'Sports', content: 'B'})
    }, 3000);

    setTimeout(() => {
        subscriber.next({ category: 'Business', content: ''})
    }, 4000);

    setTimeout(() => {
        subscriber.next({ category: 'Sports', content: 'D'})
    }, 6000);

    setTimeout(() => {
        subscriber.next({ category: 'Business', content: 'E'})
    }, 8000);

    setTimeout(() => {
        subscriber.next({ category: 'Sports', content: 'F'})
    }, 9000);

    setTimeout(() => {
        subscriber.complete();
    }, 10000);
});

const sportsNewsFeed$ = newsFeed$.pipe(
    filter(item => item.category === 'Sports')
);

sportsNewsFeed$.subscribe({
    next: (value: NewItem) => {
        console.log(value);
    },
    error: () => {
        console.log('error');
    },
    complete: () => {
        console.log('complete');
    }
})