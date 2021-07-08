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
import { ApiGetResult } from '../../apis/test.api';

const Result = () => {
    const history = useHistory();

    //-------------- CREATE MAX SCORE LIST USE SWR--------------//
    // const [isData, isSetData] = useState<boolean>(false);
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    // const { data: resultData, error } = useSWR('http://18.139.108.242:5000/user/result');
    // console.log('[Result Test Game]:', resultData);
    // const isLoading = !resultData && !error;

    // if (resultData && !isData) {
    //     isSetData(true);
    //     const chartScore = Object.keys(resultData).map((key) => resultData[key].score);
    //     const maxScoreList = resultData.filter((data: { score: number }) => data.score === Math.max(...chartScore));
    //     setResultData(maxScoreList);
    // }

    const downloadImage = () => {
        var element = document.createElement('a');
        var file = new Blob(['https://cdn.discordapp.com/attachments/821804175767764995/857648803897540678/Nature.png'], { type: 'image/*' });
        element.href = URL.createObjectURL(file);
        element.download = 'image.png';
        element.click();
    };

    // ------------------------ IF USING AXIOS FETCH DATA --------------------//
    async function getResultData() {
        const response = await ApiGetResult();
        if (response) {
            const chartScoreReal = Object.keys(response).map((key) => response[key].score);
            const maxScoreListReal = response.filter((data: { score: number }) => data.score === Math.max(...chartScoreReal));
            setResultData(maxScoreListReal);
            console.log('max score list from axios', maxScoreListReal);
        } else {
            console.log('error');
        }
    }

    useEffect(() => {
        console.log('Result of max score', result);
    }, [result]);

    useEffect(() => {
        getResultData();
    }, []);
    return (
        <Container header={null}>
            <ContainerCarousel>
                {result?.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <ContainerResultSummarize>
                                <HeaderResultFeature>คุณมีลักษณะเด่น {result.length} ด้าน</HeaderResultFeature>
                                <ImageCharactorCarousel src={item.image_charactor} />
                                <TextSkillName>{item.skill}</TextSkillName>
                                <TextSkillSummarize>{item.skill_summarize}</TextSkillSummarize>
                                <ButtonSaveResult href={item.image_charactor} download onClick={() => downloadImage()}>
                                    <UploadOutlined />
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
