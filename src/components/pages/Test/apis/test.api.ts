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
        .get('http://localhost:5000/user/result',  {headers: { 'Authorization': `Bearer ${token}` }}).then((res) => {
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
    // return mockTestData as unknown as Array<IQuestion>;
    //
    // ─── Use axios.post when backend finish ───────────────────
    //
    return await axios.post('/user/result', data ,
    {headers: { 'Authorization': `Bearer ${token}` }}).then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot post result');
    });
}
