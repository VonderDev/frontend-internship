import axios from "axios";
import { useCallback, useEffect } from "react";

const axiosGlobalConfig = useCallback(() => {
    const token = localStorage.getItem("token");

    axios.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      } 
      config.baseURL = `${process.env.REACT_APP_API_URL}`;
      return config;
    }, (error) => {
        return Promise.reject(error);
    });

  }, []);

  useEffect(() => {
    axiosGlobalConfig();
  }, [axiosGlobalConfig]);