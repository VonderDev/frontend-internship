
import mockResultData from '../mocks/result.json';
import { IResult } from '../shared/interface/Result.interfaces';

export async function API_Get_ResultData() {
    console.log( mockResultData)
    return  mockResultData as unknown as Array<IResult>
    
    
}
