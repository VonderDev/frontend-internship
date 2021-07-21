import axios from 'axios';

const token = localStorage.getItem('token');

export async function ApiPostSearch(searchData: string , body: object ) {
    console.log('[Search Data] :', searchData);
    console.log('[Filter Data] :', body);

    return await axios.post(`/user/search/${searchData}`, body)
    .then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot Search');
    });
}

export async function ApiPostFilter(data: any) {
    console.log('[Filter Data] :', data);
    return await axios.post("/user/content/tag", data)
    .then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot Filter');
    });
}
