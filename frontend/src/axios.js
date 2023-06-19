import axios from "axios";


export const axiosAPI = axios.create({
    baseURL: 'https://backend.senaresearch-dz.com/sena-api',
  });


export const axiosAuth = axios.create({
    baseURL: 'https://backend.senaresearch-dz.com/auth',
  });

export const axiosAccount = axios.create({
    baseURL: 'https://backend.senaresearch-dz.com/accounts',
  });

