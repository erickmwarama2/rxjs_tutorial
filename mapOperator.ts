import { filter, map, tap } from "rxjs";

const { of } = require("rxjs");

of(1,7,3,6,2).pipe(
    tap(value => console.log('spy value', value)),
    filter((value: number) => value > 5),
    map((value: number) => value * 2),
).subscribe(value => console.log(value));