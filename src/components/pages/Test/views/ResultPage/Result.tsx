import { useHistory } from 'react-router-dom';
import { ContainerResult } from '../../shared/styles/ResultPage.styled';
import Container from 'components/Container/Container';
import { useEffect } from 'react';
import { Carousel } from 'antd';
import { ButtonSeeAllResult, ContainerResultSummarize, HeaderResultFeature, ImageCharactorCarousel, TextSkillName, TextSkillSummarize } from '../../shared/styles/ResultSummarize.styled';
// ─── import mockData ───────────────────────────────────────────────────────────────────
//
const mockResult = require('../../mocks/result.json');
const chartScore = Object.keys(mockResult).map((key) => mockResult[key].score);
const max = Math.max(...chartScore);
const maxScoreList = mockResult.filter((data: { score: number }) => data.score === max);

const Result = () => {
    const history = useHistory();
    useEffect(() => {
        console.log('Maxscore: ', max);
        console.log('Name: ', maxScoreList.length);
    }, []);

    return (
        <>
            <Container header={null}>
                <ContainerResult>
                    <Carousel vertical>
                        {maxScoreList.map((item: any, index: any) => {
                            return (
                                <>
                                    <ContainerResultSummarize>
                                        <HeaderResultFeature>คุณมีลักษณะเด่น {maxScoreList.length} ด้าน</HeaderResultFeature>
                                        <ImageCharactorCarousel src={item.image_charactor} />
                                        <TextSkillName>{item.skill}</TextSkillName>
                                        <TextSkillSummarize>{item.skill_summarize}</TextSkillSummarize>
                                    </ContainerResultSummarize>
                                </>
                            );
                        })}
                    </Carousel>
                    <ButtonSeeAllResult type="primary" onClick={() => history.push('/resultinfo')}>
                        ดูผลลัพธ์ทั้งหมด
                    </ButtonSeeAllResult>
                </ContainerResult>
            </Container>
        </>
    );
};

export default Result;
