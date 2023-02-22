import axios from "axios";


export const makeRequest = axios.create({
    baseURL: import.meta.env.VITE_SECRET_API_URL,
    headers: {
        Authorization: "bearer " + import.meta.env.VITE_SECRET_API_TOKEN,
    },
})