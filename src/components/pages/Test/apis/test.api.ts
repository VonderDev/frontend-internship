import axios from 'axios';

const token = localStorage.getItem('token');

export async function ApiGetTestData() {
    return await axios
        .get('/questions')
        .then((response) => {
            console.log('[Function API_GetTestData] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

export async function ApiGetResult() {
    return await axios
        .get('/user/result',  {headers: { 'Authorization': `Bearer ${token}` }}).then((res) => {
            console.log('[Result Data] :', res.data); 
        return res.data
        })
        .catch((err) => {
            console.error(err);
        });
}


export async function ApiPostTestResult(data: any) {
    console.log('[Result Data] :', data);
    console.log('[Result length]:', data.length)
    const token = localStorage.getItem('token');
    const tokenGuest = localStorage.getItem('tokenGuest');
    if(token){
        return await axios.post('/user/newResult', data,{headers: { 'Authorization': `Bearer ${token}` }}).then((res) => {
            console.log("response", res.data)
            return res.data
        })
        .catch((err) => {
            console.error(err);
            console.log('Cannot post result');
        });
    }
    else if(tokenGuest){
        return await axios.post('/guest/result', data,{headers: { 'Authorization': `Bearer ${tokenGuest}` }}).then((res) => {
            console.log("response for guest", res.data)
            return res.data
        })
        .catch((err) => {
            console.error(err);
            console.log('Cannot post result for guest');
        });
    } 
}
