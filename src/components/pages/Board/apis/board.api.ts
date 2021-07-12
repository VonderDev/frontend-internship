import axios from 'axios';

export async function ApiGetBoardUserContent() {
    const token = localStorage.getItem("token");
    return await axios
     .get('/user/content/get',{headers: {
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