import axios from "axios";

// console.log('JSON.stringify(process.env)',JSON.stringify(process.env))

const instance = axios.create({
  //baseURL: 'http://206.189.1.25:5000/',

  baseURL: "http://localhost:5000",
  withCredentials: true,

  // headers: {
  //   'Authorization': 'Bearer ' + localStorage.getItem('li_web_token')
  // }
});

export default instance;
