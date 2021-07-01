import axios from "axios";
import { my_app } from "./ConfigURL";

const refreshToken = () => {
    let token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
      my_app
      .post(`${URL}/token/url/`, {
        headers: {
          'Authorization' :`Bearer ${token}`
        }
      })
      .then(async response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
  };