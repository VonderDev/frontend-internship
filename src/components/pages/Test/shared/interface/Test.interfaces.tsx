export interface IQuestion {
    question_no: number;
    question_category: string;
    question_body: string;
}

export interface IState {
    value?: number;
    currentIndex?: number;
}

export interface IUserAns {
    question_category: string;
    score: number;
}
