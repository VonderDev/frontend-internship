import { useState } from 'react';
import { TextHeaderResult } from '../../../shared/styles/Result/ResultPage.styled';
import { IResult } from '../../../shared/interface/Result.interfaces';
import CharactorDetail from './CharactorDetail';
import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { IIconText } from 'components/pages/Board/shared/Card.interface';
import React from 'react';
import { GridBox, ImgCardCharactorList, SpaceCharactorList, SearchField, CoverImage, SkillNameOnImgCard } from 'components/pages/Test/shared/styles/Result/ResultFeature.styled';
import { ButtonGoHomeInResultFeature } from '../../../shared/styles/Result/ResultPage.styled';

import { transalateToThai } from 'utils/transalator/transalator';

const ResultFeatures = () => {
    const history = useHistory();
    //---------------- FETCHING RESULT DATA USE SWR ----------------//
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    const [isData, isSetData] = useState<boolean>(false);
    const { data: resultData, error } = useSWR('/user/newResult');
    const isLoading = !resultData && !error;

    const IconText = ({ icon, text }: IIconText) => (
        <SearchField>
            {React.createElement(icon)}
            {text}
        </SearchField>
    );

    const [detailCharacter, setDetailCharacter] = useState<IResult>({
        skill: '',
        image_charactor: '',
        description: '',
        description_career: '',
    });

    if (resultData && !isData) {
        isSetData(true);
        const chartScore = Object.keys(resultData).map((key) => resultData[key].score);
        const maxScoreList = resultData.filter((data: { score: number }) => data.score === Math.max(...chartScore));
        setResultData(maxScoreList);
        const maxScoreDefault = maxScoreList[0];
        setDetailCharacter({
            skill: maxScoreDefault.skill,
            image_charactor: maxScoreDefault.image_charactor,
            description: maxScoreDefault.description,
            description_career: maxScoreDefault.description_career,
        });
        console.log('[max Score List from useSWR]', maxScoreList);
    }

    function onClickImage(description: string, description_career: string, skill: string, image_charactor: string) {
        console.log('[คำอธิบาย , อาชีพ]', description, description_career);
        console.log(skill);
        console.log(image_charactor);
        console.log(detailCharacter);
        setDetailCharacter({ description, description_career, image_charactor, skill });
    }

    return (
        <>
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <>
                    <TextHeaderResult>ลักษณะเด่นของคุณ ({result?.length}ด้าน)</TextHeaderResult>
                    <GridBox>
                        <SpaceCharactorList>
                            {result?.map((item: any, index: any) => {
                                return (
                                    <ImgCardCharactorList
                                        typecard="Vertical"
                                        key={index}
                                        cover={<CoverImage src={item.image_charactor} style={{ borderRadius: '12px ' }} />}
                                        onClick={() => onClickImage(item.description, item.description_career, item.skill, item.image_charactor)}
                                    >
                                        {' '}
                                        <SkillNameOnImgCard>{transalateToThai(item?.skill)}</SkillNameOnImgCard>
                                    </ImgCardCharactorList>
                                );
                            })}
                        </SpaceCharactorList>
                    </GridBox>
                </>
            )}
            <CharactorDetail
                description={detailCharacter.description}
                description_career={detailCharacter.description_career}
                skill={detailCharacter.skill}
                img_charactor={detailCharacter.image_charactor}
            />
            <ButtonGoHomeInResultFeature onClick={() => history.push('/')}>กลับหน้าหลัก</ButtonGoHomeInResultFeature>
        </>
    );
};

export default ResultFeatures;