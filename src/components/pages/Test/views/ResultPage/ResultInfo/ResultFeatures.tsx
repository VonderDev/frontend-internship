import { useEffect, useState } from 'react';
import { ContainerImagePreview, ImagePreview, TextHeaderResult } from '../../../shared/styles/Result/ResultPage.styled';
import { API_Get_ResultData } from '../../../apis/Result.api';
import { IResult } from '../../../shared/interface/Result.interfaces';
import CharactorDetail from './CharactorDetail';
//
// ─── import mockData ───────────────────────────────────────────────────────────────────
//
const mockResult = require('../../../mocks/result.json');
const chartScore = Object.keys(mockResult).map((key) => mockResult[key].score);
const max = Math.max(...chartScore);
const maxScoreList = mockResult.filter((data: { score: number }) => data.score === max);

const ResultFeatures = () => {
    useEffect(() => {
        console.log('Maxscore: ', max);
        console.log('Name: ', maxScoreList.length);
    }, []);

    const [detailCharactor, setDetailCharactor] = useState<IResult>({
        skill: maxScoreList[0].skill,
        image_charactor: maxScoreList[0].image_charactor,
        description: maxScoreList[0].description,
        description_career: maxScoreList[0].description_career,
    });

    async function getResultData() {
        const response = await API_Get_ResultData();
        if (response) {
            console.log(response);
        } else {
            console.log('error');
        }
    }

    function onClickImage(description: string, description_career: string, skill: string, image_charactor: string) {
        console.log('[คำอธิบาย , อาชีพ]', description, description_career);
        console.log(skill);
        console.log(image_charactor);
        console.log(detailCharactor);
        setDetailCharactor({ description, description_career, image_charactor, skill });
    }

    return (
        <>
            <TextHeaderResult>ลักษณะเด่นของคุณ ({maxScoreList.length}ด้าน)</TextHeaderResult>
            {maxScoreList.map((item: any, index: any) => {
                return (
                    <ContainerImagePreview key={index}>
                        <ImagePreview onClick={() => onClickImage(item.description, item.description_career, item.skill, item.image_charactor)} src={item.image_charactor} />
                        {/* <TextNameSkillInImg>{item.skill}</TextNameSkillInImg> */}
                    </ContainerImagePreview>
                );
            })}
            <CharactorDetail
                description={detailCharactor.description}
                description_career={detailCharactor.description_career}
                skill={detailCharactor.skill}
                img_charactor={detailCharactor.image_charactor}
            />
        </>
    );
};

export default ResultFeatures;
