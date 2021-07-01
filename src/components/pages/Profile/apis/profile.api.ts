
import axios from 'axios';
const token = localStorage.getItem("token");
export async function API_GET_USER_Data()  {
    
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

export async function API_PUT_USER_DATA(data: any) {
    console.log('[Edited data] :', data);
    return await axios
    .put('http://localhost:5000/user', data , {headers: {
        "Authorization": `Bearer ${token}`
      }})
    .then((res) => {
        return res.data
    })
}
