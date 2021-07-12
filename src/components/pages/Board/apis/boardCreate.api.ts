import axios from 'axios';

const token = localStorage.getItem('token');
//----------------------- AXIOS POST CONTENT -----------------------//
export async function ApiPostContent(data: any) {
    console.log('[Content data] :', data);
    return await axios.post('/user/content', data ,
    {headers: { 'Authorization': `Bearer ${token}` }}).then((res) => {
        console.log("[Response : Post content]", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot post content');
    });
}

export async function ApiGetNewestContent() {
    return await axios
        .get('/user/newestContent',  {headers: { 'Authorization': `Bearer ${token}` }})
        .then((response) => {
            console.log('[Content Post Newest] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

export async function ApiPostFilter(data: any) {
    console.log('[Filter Data] :', data);
    return await axios.get('/user/content/tag', data )
    .then((res) => {
        console.log("response", res.data)
        return res.data
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot post Filter');
    });
}
