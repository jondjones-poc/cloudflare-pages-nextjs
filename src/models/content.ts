export interface ContentLink {
    id: number;
    workId: number;
    guidValue: string;
    url: string;
}


export enum PageType {
    GenericContentPage = 'GenericContentPage',
    HomePage = 'HomePage',
}

export enum BlockType {
    TextBlock = 'TextBlock',
}

export type ContentPageType = ['Page', PageType];
export type ContentBlockType = ['Block', BlockType];