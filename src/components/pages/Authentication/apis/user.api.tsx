import mockData from '../mocks/user.json'
import { ILogin } from '../shared/login.interface'
import axios from 'axios'

export async function API_Login_Data() {
    console.log(mockData)
   return mockData as unknown as Array<ILogin>
}

export async function API_PostDataUser(data : any) {
    console.log(data);
    try {
        await axios.post('http://localhost:5000/signup', data)
        return data
    } catch (error) {
        console.log("error from api status : " , error.response.status);
        console.log("error from api message : " , error.response.message);
        console.log(error)
        if(error.response.status === 500) {
            console.log("มีชื่อผู้ใช้งานหรืออีเมลนี้แล้ว");
        }
        return error
    }
}