import axios from 'axios';

export async function ApiGetBoardUserContent() {
    const token = localStorage.getItem("token");
    return await axios
     .get('/user/content/get')
          // เปลี่ยนเป็น try catch
        .then((response) => {
            console.log('[Function API_USER_Data] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
}
export async function ApiPostFilter(data: object) {
            const token = localStorage.getItem('token');
            console.log('[Filter Data] :', data);
    return await axios.post('/user/content/tag', data)
    .then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot Filter');
    });
}