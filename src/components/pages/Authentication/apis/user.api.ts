import mockData from '../mocks/user.json'
import { ILogin } from '../shared/login.interface'
import axios from 'axios'

export async function API_Login_Data() {
    console.log(mockData)
   return mockData as unknown as Array<ILogin>
}

export async function API_PostDataUser(data : any) {
    return await axios.post('http://localhost:5000/signup').then((res) => {
        return res.data
    })
}