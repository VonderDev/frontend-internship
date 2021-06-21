export interface IProfile {
    username: string;
    name: string;
    surname: string;
    email: string;
    result: string;
    pic: string;
}

export interface IListDataProfile {
    href: string;
    title: string;
    avatar: string;
    description: string;
}

export interface IIconTextProfile {
    icon: React.ForwardRefExoticComponent<any>;
    text: string;
}
