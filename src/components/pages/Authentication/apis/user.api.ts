import mockData from '../mocks/user.json'
import { ILogin } from '../shared/login.interface'
import axios from 'axios'

export async function API_Login_Data() {
    console.log(mockData)
   return mockData as unknown as Array<ILogin>
}

export async function ApiPostDataUser(data : any) {
    try {
        await axios.post('/signup', data)
        return data
    } catch (error) {
        console.log("catch ERORRRR : ",error.response)
        return error.response
    }
}