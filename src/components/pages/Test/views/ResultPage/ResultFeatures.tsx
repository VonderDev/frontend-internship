import { useEffect, useState } from 'react';
import { ContainerImagePreview, ImagePreview, TextHeaderResult } from '../../shared/styles/ResultPage.styled';
import { useHistory } from 'react-router-dom';
import { Col, Row, Image } from 'antd';
import { API_Get_ResultData } from '../../apis/Result.api';
import { IResult } from '../../shared/interface/Result.interfaces';
import CharactorDetail from './CharactorDetail';
//
// ─── import mockData ───────────────────────────────────────────────────────────────────
//
const mockResult = require('../../mocks/result.json');
const chartScore = Object.keys(mockResult).map((key) => mockResult[key].score);
const max = Math.max(...chartScore);
const maxScoreList = mockResult.filter((data: { score: number }) => data.score === max);

const Descrip = () => {
    useEffect(() => {
        console.log('Maxscore: ', max);
        console.log('Name: ', maxScoreList.length);
    }, []);

    const [detailCharactor, setDetailCharactor] = useState<IResult>({ skill: '', image_charactor: '', description: '', description_career: '' });
    // const [description, setDescription] = useState<string>('');
    // const [descriptionCareer, setDescriptionCareer] = useState<string>('');
    // const [categoryName, setCategoryName] = useState<string>('');
    // const [imgCharactor, setImgCharactor] = useState<string>('');

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
