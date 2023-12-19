import { of } from "rxjs";
// import { axios } from "axios";
const axios = require('axios');

const ajax$ = axios.get('https://random-data-api.com/api/name/random_name');

ajax$.subscribe(
    data => console.log('Sub 1:', data.response.first_name)
);

ajax$.subscribe(
    data => console.log('Sub 2:', data.response.first_name)
);

ajax$.subscribe(
    data => console.log('Sub 3:', data.response.first_name)
);