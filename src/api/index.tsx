import axios, { AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  baseURL: "http://localhost:8001/",
};

export const useApi = () => {
  const BackEndPiont = axios.create({ ...options });
  BackEndPiont.interceptors.request.use(
    async (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return { BackEndPiont };
};
