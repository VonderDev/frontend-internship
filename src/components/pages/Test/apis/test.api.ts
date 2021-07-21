import mockTestData from '../mocks/question.json'
import { IQuestion, IUserAns } from '../shared/interface/Test.interfaces'
import axios from 'axios'


export async function API_GetTestData() {
    console.log("[Mock Data] :",mockTestData)
   return mockTestData as unknown as Array<IQuestion>
}

export async function API_PostTestResult(data : any) {
    console.log("[Result Data] :",data)
    return mockTestData as unknown as Array<IQuestion>
    //
    // ─── Use axios.post when backend finish ───────────────────
    //
    // return await axios.post('/api/post', data).then((res) => {
    //     return res.data
    // })
}