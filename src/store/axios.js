import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: process.env.PUBLIC_SERVER,
  headers: {
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json; charset=utf-8',
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    'X-Requested-With': 'XMLHttpRequest'
  }
});
let token = window.localStorage.getItem('token')
  instance.interceptors.request.use((config) => {
    config.headers.authorization = token;
    return config
  })



export default instance;
