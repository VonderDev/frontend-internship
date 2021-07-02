export interface IQuestion {
    questionIndex: number;
    categoryIndex: number;
    questionBody: string;
}

export interface IState {
    value?: number;
    currentIndex?: number;
}

export interface IUserAns {
    categoryId: number;
    score: number;
}
