import mockData from '../mocks/user.json'
import { ILogin } from '../shared/login.interface'
import axios from 'axios'

export async function API_Login_Data() {
    console.log(mockData)
   return mockData as unknown as Array<ILogin>
}

export async function ApiGetUserData()  {
    try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get('http://localhost:5000/user/find', {headers : {
            "Authorization" : `Bearer ${token}`
        }})

        if(data) {
            console.log('[Function API_USER_Data] :', data);
        }
    } catch (error) {
        console.log(error)
        console.log("API Failed");
        return error.message
    }
}

export async function API_PostDataUser(data : any) {
    console.log(data);
    return await axios.post('http://localhost:5000/signup', data)
    .then((res) => {
        return res.data
    })
}