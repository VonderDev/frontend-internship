import mockTestData from '../mocks/question.json';
import { IQuestion, IUserAns } from '../shared/interface/Test.interfaces';
import axios from 'axios';

export async function API_GetTestData() {
    //    return mockTestData as unknown as Array<IQuestion>
    return await axios
        .get('http://localhost:5000/questions')
        .then((response) => {
            console.log('[Function API_GetTestData] :', response.data);
            return response.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

export async function API_PostTestResult(data: any) {
    console.log('[Result Data] :', data);
    // return mockTestData as unknown as Array<IQuestion>;
    //
    // ─── Use axios.post when backend finish ───────────────────
    //
    return await axios.post('http://localhost:5000/user/result', data).then((res) => {
        return res.data
    })
}

axios({
    method: 'get',
    url: 'http://localhost:5000/questions',

})
    .then((response) => {
        console.log('[Question detail from backend]: ', response.data);
        // do something about response
    })
    .catch((err) => {
        console.error(err);
    });

