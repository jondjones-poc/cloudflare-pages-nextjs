import axios, { AxiosRequestConfig } from 'axios';
import { GetStaticPropsContext } from 'next';

export const getPageDataStaticProps = <T>(ctx : GetStaticPropsContext) => {
    const url = `http://localhost:5000/api/episerver/v3.0/content/?contentUrl=http://localhost:5000&expand=*`;
    debugger;
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