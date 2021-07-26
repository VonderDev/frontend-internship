import { useState } from 'react';
import { TextHeaderResult } from '../../../shared/styles/Result/ResultPage.styled';
import { IResult } from '../../../shared/interface/Result.interfaces';
import CharactorDetail from './CharactorDetail';
import useSWR from 'swr';
import { useHistory, useParams } from 'react-router-dom';
import { GridBox, ImgCardCharactorList, SpaceCharactorList, CoverImage, SkillNameOnImgCard } from 'components/pages/Test/shared/styles/Result/ResultFeature.styled';
import { transalateToThai } from 'utils/transalator/transalator';
import { Box, ButtonStyle } from 'shared/style/theme/component';

const ResultFeatures = () => {
    const history = useHistory();
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
            <Box justify="center" align="center" direction="row" style={{ height: '50px', marginBottom: '40px' }}>
                <ButtonStyle
                    typebutton="Large"
                    sizebutton={85}
                    style={{ fontSize: '16px', fontWeight: 'bolder' }}
                    onClick={() => {
                        history.push('/');
                        const tokenGuest = localStorage.getItem('tokenGuest');
                        if (tokenGuest) {
                            localStorage.removeItem('tokenGuest');
                        }
                    }}
                >
                    กลับหน้าหลัก
                </ButtonStyle>
            </Box>
        </>
    );
};

export default ResultFeatures;
