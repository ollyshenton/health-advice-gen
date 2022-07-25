import axios from "axios";

const baseURL = "https://api.adviceslip.com";

export const fetchAdvice = () => axios.get(`${baseURL}/advice`);
