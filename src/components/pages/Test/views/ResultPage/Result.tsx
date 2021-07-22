import { useHistory } from 'react-router-dom';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import {
    ButtonSaveResult,
    ButtonSeeAllResult,
    ContainerCarousel,
    ContainerResultSummarize,
    HeaderResultFeature,
    ImageCharactorCarousel,
    TextSkillName,
    TextSkillSummarize,
} from '../../shared/styles/Result/ResultSummarize.styled';
import useSWR from 'swr';
import { UploadOutlined } from '@ant-design/icons';
import { IResult } from '../../shared/interface/Result.interfaces';

const Result = () => {
    const history = useHistory();
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    const tokenGuest = localStorage.getItem('tokenGuest');

    //-------------- CREATE MAX SCORE LIST USE SWR--------------//
    const { data: resultData, error } = useSWR(token ? '/user/newResult' : '/guest/result');

    useEffect(() => {
        if (resultData && (token || tokenGuest)) {
            setResultData(resultData.filter((data: { score: number }) => data.score === Math.max(...Object.keys(resultData).map((key) => resultData[key].score))));
            console.log('Result Data', resultData);
        }
    }, [resultData]);

    const downloadImage = () => {
        const element = document.createElement('a');
        const file = new Blob([`${resultData?.img_result}`], { type: 'image/*' });
        element.href = URL.createObjectURL(file);
        element.download = 'vonder-meCharactor.png';
        element.click();
    };

    return (
        <Container header={null}>
            <ContainerCarousel>
                {result?.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <ContainerResultSummarize>
                                <HeaderResultFeature>คุณมีลักษณะเด่น {result.length} ด้าน</HeaderResultFeature>
                                <ImageCharactorCarousel src={item.img_result} />
                                <ButtonSaveResult href={item.img_result} download onClick={() => downloadImage()}>
                                    {/* <UploadOutlined /> */}
                                    บันทึกผลลัพธ์
                                </ButtonSaveResult>
                            </ContainerResultSummarize>
                        </div>
                    );
                })}
            </ContainerCarousel>
            <ButtonSeeAllResult type="primary" onClick={() => history.push('/resultinfo')}>
                ดูผลลัพธ์ทั้งหมด
            </ButtonSeeAllResult>
        </Container>
    );
};

export default Result;
