//
// ─── Set interface ───────────────────────────────────────────────────────────────────
//
export enum tagsData {
    tagOne = 'Linguistic',
    tagTwo = 'Mathematical',
    tagThree = 'Musical',
    tagFour = 'Visual-Spatial',
    tagFive = 'Naturist',
    tagSix = 'Bodily-Kinesthetic',
    tagSeven = 'Interpersonal',
    tagEight = 'Intrapersonal',
}

export interface IListData {
    href: string;
    title: string;
    avatar: string;
    image: string;
    description: string;
}

export interface IIconText {
    icon: React.ForwardRefExoticComponent<any>;
    text: string;
}
