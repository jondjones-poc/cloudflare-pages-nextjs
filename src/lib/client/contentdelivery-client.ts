import axios, { AxiosRequestConfig } from 'axios';
import { GetStaticPropsContext } from 'next';

export const getPageDataStaticProps = <T>(ctx : GetStaticPropsContext) => {
    const url = `http://cms12.jondjones.com/api/episerver/v3.0/content/?contentUrl=http://cms12.jondjones.com/&expand=*`;
    const config = {   
         baseURL: process.env.NEXT_PUBLIC_EPISERVER_SERVER, 
         headers: {
        Accept: 'application/json',
    }};
    const headers: AxiosRequestConfig['headers'] = {};

    console.log(url);
    console.log(config);

    return axios.get<T>(url,  {...config, headers });
};