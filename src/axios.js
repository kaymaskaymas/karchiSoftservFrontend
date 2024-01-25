import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://karchisoftservbackend.onrender.com",
});

export default instance;
