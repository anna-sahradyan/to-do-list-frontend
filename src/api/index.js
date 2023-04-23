import axios from "axios";
import{BASE_URL} from "./helper";

 export const API = axios.create({baseURL: BASE_URL})

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('task')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('task')).token}`;
//     }
//
//     return req;
// });
