export interface IProfile {
    username: string;
    name: string;
    surname: string;
    email: string;
    result: string;
    pic: string;
}

export interface IListDataBoardHistory {
    href: string;
    title: string;
    avatar: string;
    description: string;
}

export interface IListDataResult {
    href: string;
    title: string;
    avatar: string;
    description: string;
}

export interface IIconTextProfile {
    icon: React.ForwardRefExoticComponent<any>;
    text: string;
}
export interface IInput {
    username: string;
    name: string;
    surname: string;
    email: string;
    pic: string;
}
