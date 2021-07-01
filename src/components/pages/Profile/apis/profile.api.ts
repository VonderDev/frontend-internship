
import axios from 'axios';
import { promises } from 'dns';
import mockData from '../mocks/user.json';


export async function API_USER_Data()  {
    const token = localStorage.getItem("token");
    return await axios 
        .get('http://localhost:5000/user/find',{headers: {
            "Authorization": `Bearer ${token}`
          }})
        .then((response) => {
            console.log('[Function API_USER_Data] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
    
}
