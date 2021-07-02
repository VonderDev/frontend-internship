
import axios from 'axios';


export async function ApiGetUserData()  {
    const token = localStorage.getItem("token");
    return await axios 
        .get('http://localhost:5000/user/find',{headers: {
            "Authorization": `Bearer ${token}`
          }})
          // เปลี่ยนเป็น try catch
        .then((response) => {
            console.log('[Function API_USER_Data] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
    
}

export async function ApiPutUserData(data: any) {
    const token = localStorage.getItem("token");
    console.log('[Edited data] :', data);
    return await axios
    .put('http://localhost:5000/user', data , {headers: {
        "Authorization": `Bearer ${token}`
      }})
      // เปลี่ยนเป็น try catch
    .then((res) => {
        return res.data
    })
}
