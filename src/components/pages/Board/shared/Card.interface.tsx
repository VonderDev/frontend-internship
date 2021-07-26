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

export interface ICardData {
    title: string;
    tag: string;
    author_username: string;
    images: any;
    likes: any;
}
