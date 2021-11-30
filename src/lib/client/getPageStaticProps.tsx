import { GetStaticProps, GetStaticPropsContext } from "next";
import { PageData } from "../../models/pages";
import { getPageDataStaticProps } from "./contentdelivery-client";

export interface PageProps {
    pageData: PageData;
}

export const getPageDataStatic: GetStaticProps<PageProps> = async (context) => {

    try {
        const { pageData } = await getPageData(context);
        console.log('getStaticSidePageData', pageData);
        return {
            props: {
                pageData,
            }
        };
    } catch (err) {
        console.log('getStaticSidePageData error', err);
    }
};

const getPageData = async (ctx : GetStaticPropsContext) => {
    const { data } = await getPageDataStaticProps<PageData>(ctx); 
    console.log('getPageData', data);
    return {
        pageData : data[0],
    };
};

export default getPageDataStatic;