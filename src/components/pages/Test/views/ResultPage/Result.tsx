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

    const { data: resultData, error } = useSWR('http://localhost:5000/user/result');
    console.log('[Result Test Game]:', resultData);
    useEffect(() => {
        console.log(resultData);
    }, [resultData]);

    const download = () => {
        var element = document.createElement('a');
        var file = new Blob(['https://cdn.discordapp.com/attachments/821804175767764995/857648803897540678/Nature.png'], { type: 'image/*' });
        element.href = URL.createObjectURL(file);
        element.download = 'image.png';
        element.click();
    };
    return (
        <Container header={null}>
            <ContainerCarousel>
                {/* <a href="https://www.jqueryscript.net/images/Create-Smooth-Image-Zoom-Pan-Effects-With-jQuery-EasyZoom.jpg" download onClick={() => download()}>
                    <i className="fa fa-download" />
                    download
                </a> */}
                {maxScoreList.map((item: any, index: any) => {
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
            <ButtonSeeAllResult type="primary" onClick={() => history.push('/resultinfo')}>
                ดูผลลัพธ์ทั้งหมด
            </ButtonSeeAllResult>
        </Container>
    );
};

export default Result;
