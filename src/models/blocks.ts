import { ContentBlockType } from "./content";

export interface BlockData {
    contentType?: ContentBlockType;
}

export interface TextBlockData  {
    mainBody?: any ;
    contentLink: any 
    id: any
}

interface ContentAreaItem {
    contentLink: { expanded: BlockData; id: number, guidValue: string; };
}

export type ContentArea = ContentAreaItem[];
  