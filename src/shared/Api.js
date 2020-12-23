import axios from "axios";
// IE에서 axios 통신 결과 캐싱되는 현상 방지
axios.defaults.headers.common = {
  Pragma: "no-cache",
};

// const BACKEND_URL = "http://127.0.0.1:4000"; // 로컬서버
const BACKEND_URL = "https://blog-back-server.herokuapp.com"; // heroku 서버

// console.log(process.env);

export const mainApi = axios.create({
  baseURL: `${BACKEND_URL}/main`,
});

export const portfolioApi = axios.create({
  baseURL: `${BACKEND_URL}/api/portfolio`,
});

export const studyApi = axios.create({
  baseURL: `${BACKEND_URL}/api/study`,
});

export const nodemailerApi = axios.create({
  baseURL: `${BACKEND_URL}/api/sendEmail/sendEmail`,
});
