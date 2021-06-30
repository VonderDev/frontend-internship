export interface IResult {
    categoryID?: number;
    skill: string;
    score?: number;
    description: string;
    description_career: string;
    image_charactor: string;
    skill_summerize?: string;
}
export interface IResultSummarize {
    skill: string;
    image_charactor: string;
    skill_summarize: string;
}
