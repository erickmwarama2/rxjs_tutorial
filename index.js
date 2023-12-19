"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { axios } from "axios";
var axios = require('axios');
var ajax$ = axios.get('https://random-data-api.com/api/name/random_name');
ajax$.subscribe(function (data) { return console.log('Sub 1:', data.response.first_name); });
ajax$.subscribe(function (data) { return console.log('Sub 2:', data.response.first_name); });
ajax$.subscribe(function (data) { return console.log('Sub 3:', data.response.first_name); });
