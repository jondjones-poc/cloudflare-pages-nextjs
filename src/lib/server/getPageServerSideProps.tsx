import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { PageData } from "../../models/pages";
import { getPageDataSSR } from "./contentdelivery-server";

export interface PageProps {
    pageData: PageData;
}

export const getServerSidePageData: GetServerSideProps<PageProps> = async (context) => {
    try {
        const { pageData } = await getPageData(context);

        console.log('getServerSidePageData', pageData);

        return {
            props: {
                pageData,
            }
        };
    } catch (err) {

        console.log(err);
        
    }
};

const getPageData = async (ctx : GetServerSidePropsContext) => {
    const { data } = await getPageDataSSR<PageData>(ctx); 
    console.log('getPageData', data);
    return {
        pageData : data[0],
    };
};

export default getServerSidePageData;