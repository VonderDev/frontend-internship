import React from 'react';
import { TextTopicResultOverview } from '../../shared/styles/ResultPage.styled';
import ResultDescription from './Descrip';

function ResultFeatures() {
    return (
        <div>
            <TextTopicResultOverview>ลักษณะเด่นของคุณ</TextTopicResultOverview>
            <ResultDescription />
        </div>
    );
}

export default ResultFeatures;
