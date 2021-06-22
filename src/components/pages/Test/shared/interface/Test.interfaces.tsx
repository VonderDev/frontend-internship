export interface IQuestion {
    categoryID: number;
    question: string;
    questionIndex: number;
}

export interface IState {
    value?: number;
    currentIndex?: number;
}

export interface IUserAns {
    categoryID: number;
    score: number;
}
