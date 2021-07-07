import mockData from '../mocks/user.json'
import { ILogin } from '../shared/login.interface'
import axios from 'axios'

export async function API_Login_Data() {
    console.log(mockData)
   return mockData as unknown as Array<ILogin>
}

export async function ApiPostDataUser(data : any) {
    console.log(data);
    try {
        await axios.post('http://localhost:5000/signup', data)
        return data
    } catch (error) {
        console.log("error from api status : " , error.response.status);
        console.log("catch ERORRRR : ",error.response.data.error)
        if(error.response.status === 500) {
            if(error.response.data.error === "Email and Username has been used."){
                alert('มีชื่อผู้ใช้งานและอีเมลนี้แล้ว')
            } else if (error.response.data.error === "Email has been used.") {
                alert('มีอีเมลนี้แล้ว')
            } else if (error.response.data.error === "Username has been used.") {
                alert('มีชื่อผู้ใช้งานนี้แล้ว')
            } else {
                alert('NULL');
            }
        }
        return error
    }
}