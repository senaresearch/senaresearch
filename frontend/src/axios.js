import axios from "axios";


export const axiosAPI = axios.create({
    baseURL: 'https://sena-reserach.vercel.app/sena-api',
  });


export const axiosAuth = axios.create({
    baseURL: 'https://sena-reserach.vercel.app/auth',
  });

export const axiosAccount = axios.create({
    baseURL: 'https://sena-reserach.vercel.app/accounts',
  });

