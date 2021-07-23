import axios from 'axios';

const token = localStorage.getItem('token');
//----------------------- AXIOS POST CONTENT -----------------------//
export async function ApiPostComment(data: any) {
    console.log('[Comment data send to backend] :', data);
    return await axios.post('/comment', data ,
    {headers: { 'Authorization': `Bearer ${token}` }}).then((res) => {
        console.log("[Response : Post comment]", res.data)
        return res.data
        
    })
    .catch((err) => {
        console.error(err);
        console.log('Cannot post comment');
    });
}