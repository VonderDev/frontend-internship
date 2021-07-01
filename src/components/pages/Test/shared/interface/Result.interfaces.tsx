export interface IResult {
    category_id?: number;
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

export interface ResultSummarizeProps {
    category_id?: number;
    skill: string;
    score?: number;
    description: string;
    description_career: string;
    image_charactor: string;
    skill_summarize?: string;
    charactor_summarize: string;
}
