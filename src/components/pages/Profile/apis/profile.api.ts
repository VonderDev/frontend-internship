
import axios from 'axios';
import mockData from '../mocks/user.json';

export async function API_USER_Data() {
    return await axios
        .get('http://localhost:5000/user/find')
        .then((response) => {
            console.log('[Function API_USER_Data] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
    
}
