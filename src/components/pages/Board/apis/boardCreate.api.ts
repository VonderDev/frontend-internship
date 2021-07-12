import axios from 'axios';

const token = localStorage.getItem('token');
    
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
