import axios from "axios";
const config={
    Authorization: `Bearer `+localStorage.getItem("token"),
    "Content-type": "application/json",
  }
export const Http=axios.create({
    baseURL:"http://localhost:8000/api/",
    responseType:'json',
    headers: {Authorization: `Bearer `+localStorage.getItem("token"),}
  })
  export const SecureHttp=axios.create({
    baseURL:"http://localhost:8000/api/",
    responseType:'json',
    headers: config
  })