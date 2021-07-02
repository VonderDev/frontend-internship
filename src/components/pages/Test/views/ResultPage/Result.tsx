import { useHistory } from 'react-router-dom';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import {
    ButtonSeeAllResult,
    ContainerCarousel,
    ContainerResultSummarize,
    HeaderResultFeature,
    ImageCharactorCarousel,
    TextSkillName,
    TextSkillSummarize,
} from '../../shared/styles/Result/ResultSummarize.styled';
import useSWR from 'swr';
import axios from 'axios';
import { ResultSummarizeProps } from '../../shared/interface/Result.interfaces';
// ─── import mockData ───────────────────────────────────────────────────────────────────
//
const mockResult = require('../../mocks/result.json');
const chartScore = Object.keys(mockResult).map((key) => mockResult[key].score);
const max = Math.max(...chartScore);
const maxScoreList = mockResult.filter((data: { score: number }) => data.score === max);

const Result = () => {
    const history = useHistory();
    const [resultList, setResultList] = useState<Array<ResultSummarizeProps> | null>(null);
    const [questionList, setQuestionList] = useState<Array<ResultSummarizeProps> | null>(null);
    const [detailResult, setDetailResult] = useState<ResultSummarizeProps>({
        skill: '',
        charactor_summarize: '',
        image_charactor: '',
        category_id: 0,
        description: '',
        description_career: '',
        skill_summarize: '',
        score: 0,
    });
    useEffect(() => {
        console.log('Maxscore: ', max);
        console.log('Name: ', maxScoreList.length);
    }, []);

    const questionListFetcher = (key: any) =>
        fetch(key, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        }).then(async (res) => {
            console.log('Fetcher triggered');
            const data = await res.json();
            setResultList(data); // store all question into the hook
            const response = data;
            setDetailResult(response);
            return data;
        });

    const { data, error } = useSWR('http://localhost:5000/user/result');
    console.log('[Result Test Game]:', data);

    return (
        <Container header={null}>
            <ContainerCarousel>
                {maxScoreList.map((item: any, index: any) => {
                    return (
                        <div key={index}>
                            <ContainerResultSummarize>
                                <HeaderResultFeature>คุณมีลักษณะเด่น {maxScoreList.length} ด้าน</HeaderResultFeature>
                                <ImageCharactorCarousel src={item.image_charactor} />
                                <TextSkillName>{item.skill}</TextSkillName>
                                <TextSkillSummarize>{item.skill_summarize}</TextSkillSummarize>
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
