import { useState } from 'react';
import { TextHeaderResult } from '../../../shared/styles/Result/ResultPage.styled';
import { IResult } from '../../../shared/interface/Result.interfaces';
import CharactorDetail from './CharactorDetail';
import useSWR from 'swr';
import { useHistory, useParams } from 'react-router-dom';
import { GridBox, ImgCardCharactorList, SpaceCharactorList, CoverImage, SkillNameOnImgCard, ContainerImgCharactor } from 'components/pages/Test/shared/styles/Result/ResultFeature.styled';
import { transalateToThai } from 'utils/transalator/transalator';
import ErrorPage from 'shared/errorPage/ErrorPage';

const ResultFeatures = () => {
    //---------------- FETCHING RESULT DATA USE SWR ----------------//
    const [result, setResultData] = useState<Array<IResult> | null>(null);
    const [isData, isSetData] = useState<boolean>(false);
    //----------------------- GET TOKEN ----------------------- //
    const token = localStorage.getItem('token');
    const { data: resultData, error } = useSWR(token ? '/user/newResult' : '/guest/result');
    const isLoading = !resultData && !error;

    const [detailCharacter, setDetailCharacter] = useState<IResult>({
        skill: '',
        image_charactor: '',
        description: '',
        description_career: '',
    });

    const paramObjectId = useParams<{ id: string; index: string }>();
    const { data: resultHistory, error: errorResultHistory } = useSWR(Object.keys(paramObjectId).length ? `/user/getResultByIndex/${paramObjectId?.id}/${paramObjectId?.index}` : null);

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
    if (resultHistory && !isData) {
        isSetData(true);
        const chartScore = Object.keys(resultHistory).map((key) => resultHistory[key].score);
        const maxScoreList = resultHistory.filter((data: { score: number }) => data.score === Math.max(...chartScore));
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
        setDetailCharacter({ description, description_career, image_charactor, skill });
    }

    return (
        <>
            {error && errorResultHistory && <ErrorPage />}
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <>
                    <TextHeaderResult>ลักษณะเด่นของคุณ ({result?.length} ด้าน)</TextHeaderResult>
                    <GridBox>
                        <SpaceCharactorList>
                            {result?.map((item: any, index: any) => {
                                let border = '';
                                let textColor = '';
                                if (detailCharacter.skill == item.skill) {
                                    border = '3px #56A0EF solid';
                                    textColor = '#3A8CE4';
                                }
                                return (
                                    <div key={index}>
                                        <ContainerImgCharactor>
                                            <ImgCardCharactorList
                                                typecard="Vertical"
                                                key={index}
                                                cover={<CoverImage src={item.image_charactor} style={{ border: border, borderRadius: '12px ' }} />}
                                                onClick={() => onClickImage(item.description, item.description_career, item.skill, item.image_charactor)}
                                            >
                                                {' '}
                                                <SkillNameOnImgCard style={{ color: textColor, fontWeight: 'bold' }}>{transalateToThai(item?.skill)}</SkillNameOnImgCard>
                                            </ImgCardCharactorList>
                                        </ContainerImgCharactor>
                                    </div>
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
        </>
    );
};

export default ResultFeatures;
