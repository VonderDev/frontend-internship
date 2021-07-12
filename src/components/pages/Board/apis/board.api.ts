import axios from 'axios';

const token = localStorage.getItem('token');

export async function ApiGetFilter(data: any) {
    console.log('[Filter Data] :', data);
    // return mockTestData as unknown as Array<IQuestion>;
    //
    // ─── Use axios.post when backend finish ───────────────────
    //
    return await axios.get('/user/content/tag', data)
    .then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot Filter');
    });
}