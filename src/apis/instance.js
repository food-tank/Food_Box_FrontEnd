import axios from "axios";

const foodBox = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000 
});

export default foodBox;