import { useHistory, useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { ButtonSaveResult, ButtonSeeAllResult, ContainerCarousel, ContainerResultSummarize, HeaderResultFeature, ImageCharactorCarousel } from '../../shared/styles/Result/ResultSummarize.styled';
import useSWR from 'swr';
import { IResult } from '../../shared/interface/Result.interfaces';
import { DownloadOutlined } from '@ant-design/icons';

const Result = () => {
    const history = useHistory();
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    const tokenGuest = localStorage.getItem('tokenGuest');

    //-------------- CREATE MAX SCORE LIST USE SWR--------------//
    const paramObjectId = useParams<{ id: string; index: string }>();
    const { data: resultData, error } = useSWR(token ? '/user/newResult' : '/guest/result');

    const { data: resultHistory, error: errorResultHistory } = useSWR(Object.keys(paramObjectId).length ? `/user/getResultByIndex/${paramObjectId?.id}/${paramObjectId?.index}` : null);

    useEffect(() => {
        console.log('[param] :', paramObjectId);
        if (resultData && (token || tokenGuest)) {
            setResultData(resultData.filter((data: { score: number }) => data.score === Math.max(...Object.keys(resultData).map((key) => resultData[key].score))));
            console.log('Result Data', resultData);
        }
        if (resultHistory && paramObjectId) {
            setResultData(resultHistory?.filter((data: { score: number }) => data.score === Math.max(...Object.keys(resultHistory).map((key) => resultHistory[key]?.score))));
            console.log('[ResultProfile data]:', result);
        }
    }, [resultData, paramObjectId, resultHistory]);

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
                                {Object.keys(paramObjectId).length ? null : (
                                    <ButtonSaveResult href={item.img_result} download onClick={() => downloadImage()}>
                                        <DownloadOutlined />
                                    </ButtonSaveResult>
                                )}
                            </ContainerResultSummarize>
                        </div>
                    );
                })}
            </ContainerCarousel>
            {Object.keys(paramObjectId).length ? (
                <ButtonSeeAllResult type="primary" onClick={() => history.push(`/resultinfo/${paramObjectId?.id}/${paramObjectId?.index}`)}>
                    ดูผลลัพธ์ทั้งหมด
                </ButtonSeeAllResult>
            ) : (
                <ButtonSeeAllResult type="primary" onClick={() => history.push(`/resultinfo/`)}>
                    ดูผลลัพธ์ทั้งหมด
                </ButtonSeeAllResult>
            )}
        </Container>
    );
};

export default Result;
