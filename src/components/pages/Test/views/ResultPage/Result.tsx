import { ButtonSeeAllResults } from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { ContainerImagePreview, ContainerResult, ImageCharactorCarousel, ImagePreview, TextHeader } from '../../shared/styles/ResultPage.styled';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import { IResultSummarize } from '../../shared/interface/Result.interfaces';
import CharactorSummarize from './CharactorSummarize';

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

    const contentStyle: any = {
        height: '100vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#ffffff',
    };
    const [charactorSummarize, setCharactorSummarize] = useState<IResultSummarize>({ skill: '', image_charactor: '', skill_summarize: '' });

    function onClickCarousel(skill: string, image_charactor: string, skill_summarize: string) {
        console.log(skill);
        console.log(image_charactor);
        console.log(skill_summarize);
        setCharactorSummarize({ skill_summarize, image_charactor, skill });
    }
    return (
        <>
            <Container header={null}>
                <ContainerResult>
                    <TextHeader>คุณมีลักษณะเด่น {maxScoreList.length} ด้าน</TextHeader>
                    <ButtonSeeAllResults type="primary" onClick={() => history.push('/resultinfo')}>
                        ผลลัพธ์ทั้งหมด
                    </ButtonSeeAllResults>
                    {/* <CharactorSummarize img_charactor={charactorSummarize.image_charactor} skill={charactorSummarize.skill} skill_summarize={charactorSummarize.skill_summarize} /> */}
                    {maxScoreList.map((item: any, index: any) => {
                        return (
                            <>
                                <Carousel key={index}>
                                    <div>
                                        <h3 style={contentStyle}>
                                            {' '}
                                            <ImageCharactorCarousel
                                                preview={false}
                                                onClick={() => onClickCarousel(item.skill, item.image_charactor, item.skill_summarize)}
                                                src={item.image_charactor}
                                            ></ImageCharactorCarousel>
                                        </h3>
                                        <div>{item.skill}</div>
                                        <div>{item.skill_summarize}</div>
                                    </div>
                                    <div>
                                        <h3 style={contentStyle}>
                                            {' '}
                                            <ImageCharactorCarousel
                                                preview={false}
                                                onClick={() => onClickCarousel(item.skill, item.image_charactor, item.skill_summarize)}
                                                width={200}
                                                src={item.image_charactor}
                                            >
                                                <div>{item.skill}</div>
                                            </ImageCharactorCarousel>
                                        </h3>
                                    </div>
                                </Carousel>
                            </>
                        );
                    })}
                </ContainerResult>
            </Container>
        </>
    );
};

export default Result;
