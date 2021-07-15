import axios from 'axios';

const token = localStorage.getItem('token');

export async function ApiPostFilter(data: object) {
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

export async function ApiGetSearch(data: any) {
    console.log('[Search Data] :', data);
    return await axios.get(`/user/search/${data}`)
    .then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot Search');
    });
}
