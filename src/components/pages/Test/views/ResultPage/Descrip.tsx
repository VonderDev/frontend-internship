import { useEffect, useMemo, useState } from 'react';
import { BodyCard, Boxpic, ContainerImagePreview, DesBox, DesText, CategoryName, ImagePreview, Readmore, ResultCard, Resultpic, TextBox } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import { Col, Row, Image } from 'antd';
import { API_Get_ResultData } from '../../apis/Result.api';
import { IResult } from '../../shared/interface/Result.interfaces';
import BoardAdvice from './BoardAdvice';
import CharactorDetail from './CharactorDetail';

const MockScore = require('../../mocks/result.json');
const chartScore = Object.keys(MockScore).map((key) => MockScore[key].score);
const Max = Math.max(...chartScore);
const maxScore = MockScore.filter((data: { score: number }) => data.score === Max);

const Descrip = () => {
    const history = useHistory();

    useEffect(() => {
        console.log('Maxscore: ', Max);
        console.log('Name: ', maxScore);
    }, []);

    const [detailCharactor, setDetailCharactor] = useState<IResult>({ skill: '', image_charactor: '', description: '', description_career: '' });
    const [description, setDescription] = useState<string>('');
    const [descriptionCareer, setDescriptionCareer] = useState<string>('');
    const [categoryName, setCategoryName] = useState<string>('');
    const [imgCharactor, setImgCharactor] = useState<string>('');

    async function getResultData() {
        const response = await API_Get_ResultData();
        if (response) {
            console.log(response);
        } else {
            console.log('error');
        }
    }
    // useEffect(() => {
    //     console.log(getResultData);
    //     getResultData();
    // }, [detailCharactor]);

    function onClickImage(description: string, description_career: string, skill: string, image_charactor: string) {
        console.log(description_career, description, categoryName);
        console.log(skill);
        console.log(image_charactor);
        console.log(detailCharactor);
        setDetailCharactor({ description, description_career, image_charactor, skill });
    }

    return (
        <>
            {maxScore.map((item: any, index: any) => {
                return (
                    <>
                        <ContainerImagePreview key={index}>
                            <ImagePreview
                                preview={false}
                                onClick={() => onClickImage(item.description, item.description_career, item.skill, item.image_charactor)}
                                width={200}
                                src={item.image_charactor}
                            >
                                <div>{item.skill}</div>
                            </ImagePreview>
                        </ContainerImagePreview>
                    </>
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

export default Descrip;
