import axios from "axios";

// const token = localStorage.getItem("@token");

const api = axios.create({
    baseURL: "http://localhost:3000" || "http://localhost:3001",
    timeout: 5000,
    // headers: { Authorization: `Bearer ${token}` },
});

export default api;
