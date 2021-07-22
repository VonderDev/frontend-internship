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
        var element = document.createElement('a');
        var file = new Blob(['https://cdn.discordapp.com/attachments/821804175767764995/857648803897540678/Nature.png'], { type: 'image/*' });
        element.href = URL.createObjectURL(file);
        element.download = 'image.png';
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
