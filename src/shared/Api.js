import axios from "axios";
// IE에서 axios 통신 결과 캐싱되는 현상 방지
axios.defaults.headers.common = {
  Pragma: "no-cache"
};

export const mainApi = axios.create({
  baseURL: `${process.env.REACT_BACKEND_URL}/main`
});

export const portfolioApi = axios.create({
  baseURL: `${process.env.REACT_BACKEND_URL}/portfolio`
});

export const studyApi = axios.create({
  baseURL: `${process.env.REACT_BACKEND_URL}/study`
});
