import axios from "axios";
import { forkJoin, from, map } from "rxjs";

const randomName$ = from(axios.get('https://random-data-api.com/api/name/random_name')).pipe(
    map(ajaxRes => ajaxRes.data.first_name)
);
const randomNation$ = from(axios.get('https://random-data-api.com/api/nation/random_nation')).pipe(
    map(ajaxRes => ajaxRes.data.capital)
);
const randomFood$ = from(axios.get('https://random-data-api.com/api/food/random_food')).pipe(
    map(ajaxRes => ajaxRes.data.dish)
);

// randomName$.subscribe(value => console.log(value));
// randomNation$.subscribe(value => console.log(value));
// randomFood$.subscribe(value => console.log(value));

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    ([firstName, capital, dish]) => console.log(`${firstName} is from ${capital} and likes to eat ${dish}`)
);