import axios from "axios";


export const axiosAPI = axios.create({
    baseURL: process.env.REACT_APP_SENA_API,
  });


export const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_AUTH_API,
  });

export const axiosAccount = axios.create({
    baseURL: process.env.REACT_APP_ACCOUNT_API,
  });

