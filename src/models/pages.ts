import { ContentArea } from "./blocks";
import { ContentLink, ContentPageType } from "./content";

export interface PageData  {
    contentLink?: ContentLink;
    name?: string;
    contentType?: ContentPageType;
    parentLink?: ContentLink;
    routeSegment?: string | null;
    url?: string;
}

export interface GenericContentPageData extends PageData {
    mainContentArea? : ContentArea;
}

export interface HomePageData extends PageData{
    mainContentArea? : ContentArea;
}