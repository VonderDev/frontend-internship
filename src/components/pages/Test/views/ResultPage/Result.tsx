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
import { maxHeaderSize } from 'http';
import { ApiGetResult } from '../../apis/test.api';
//
// ─── import mockData ───────────────────────────────────────────────────────────────────
//
const mockResult = require('../../mocks/result.json');
const chartScore = Object.keys(mockResult).map((key) => mockResult[key].score);
const max = Math.max(...chartScore);
const maxScoreList = mockResult.filter((data: { score: number }) => data.score === max);

const Result = () => {
    const history = useHistory();
    //-------------- CREATE MAX SCORE LIST --------------//
    const [isData, isSetData] = useState<boolean>(false);
    const [maxScoreData, setmaxScoreData] = useState([]);
    const [result, setResultData] = useState<Array<IResult> | null>(null);

    // function fetcher(url: any) {
    //     return fetch(url, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(async (res) => {
    //         console.log('Fetcher triggered');
    //         console.log('result max score list', result);
    //         const data = await res.json();
    //         const chartScoreReal = Object.keys(resultData).map((key) => resultData[key].score);
    //         const maxScoreListReal = resultData.filter((data: { score: number }) => data.score === Math.max(...chartScoreReal));
    //         setResultData(maxScoreListReal); // store all question into the hook
    //         return data;
    //     });
    // }

    const { data: resultData, error } = useSWR('http://localhost:5000/user/result');
    console.log('[Result Test Game]:', resultData);
    const isLoading = !resultData && !error;
    // // const chartScoreReal = Object.keys(resultData).map((key) => resultData[key].score);
    // // const maxScoreListReal = resultData.filter((data: { score: number }) => data.score === Math.max(...chartScoreReal));
    // // console.log('max score', maxScoreListReal);

    // if (resultData && !isData) {
    //     isSetData(true);
    //     const chartScoreReal = Object.keys(resultData).map((key) => resultData[key].score);
    //     const maxScoreListReal = resultData.filter((data: { score: number }) => data.score === Math.max(...chartScoreReal));
    //     setResultData(maxScoreListReal); // store all question into the hook
    //     console.log('[max Score List from useSWR]', maxScoreListReal);
    // }

    // useEffect(() => {
    //     if (resultData && !isData) {
    //         isSetData(true);
    //         const chartScoreReal = Object.keys(resultData).map((key) => resultData[key].score);
    //         const maxScoreListReal = resultData.filter((data: { score: number }) => data.score === Math.max(...chartScoreReal));
    //         setResultData(maxScoreListReal); // store all question into the hook
    //         console.log('[max Score List from useSWR]', maxScoreListReal);
    //     }
    // }, []);

    const download = () => {
        var element = document.createElement('a');
        var file = new Blob(['https://cdn.discordapp.com/attachments/821804175767764995/857648803897540678/Nature.png'], { type: 'image/*' });
        element.href = URL.createObjectURL(file);
        element.download = 'image.png';
        element.click();
    };

    //------------------------ AXIOS --------------------//
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
        getResultData();
    }, []);

    useEffect(() => {
        console.log('result', result);
    }, [result]);

    return (
        <Container header={null}>
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <ContainerCarousel>
                    {result?.map((item: any, index: any) => {
                        return (
                            <div key={index}>
                                <ContainerResultSummarize>
                                    <HeaderResultFeature>คุณมีลักษณะเด่น {maxScoreList.length} ด้าน</HeaderResultFeature>
                                    <ImageCharactorCarousel src={item.image_charactor} />
                                    <TextSkillName>{item.skill}</TextSkillName>
                                    <TextSkillSummarize>{item.skill_summarize}</TextSkillSummarize>
                                    <ButtonSaveResult href={item.image_charactor} download onClick={() => download()}>
                                        <UploadOutlined />
                                        บันทึกผลลัพธ์
                                    </ButtonSaveResult>
                                </ContainerResultSummarize>
                            </div>
                        );
                    })}
                </ContainerCarousel>
            )}
            <ButtonSeeAllResult type="primary" onClick={() => history.push('/resultinfo')}>
                ดูผลลัพธ์ทั้งหมด
            </ButtonSeeAllResult>
        </Container>
    );
};

export default Result;
