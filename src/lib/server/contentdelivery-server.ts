import axios, { AxiosRequestConfig } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { getCookie } from './cookieHandler';

const contentDeliveryConfigSSR = {
    baseURL: process.env.NEXT_PUBLIC_EPISERVER_SERVER, 
    headers: {
        Accept: 'application/json',
    },
};

export const getPageDataSSR = <T>(ctx : GetServerSidePropsContext) => {
    const url = `/api/episerver/v3.0/content/?contentUrl=${ctx.resolvedUrl}&expand=*`;
    const config = addHeaders(contentDeliveryConfigSSR, ctx);

    console.log(url);
    console.log(config);

    return axios.get<T>(url, config);
};

const addHeaders = (config: AxiosRequestConfig, ctx : GetServerSidePropsContext): AxiosRequestConfig => {
    const headers: AxiosRequestConfig['headers'] = {};
    
    var authCookie = getCookie(ctx, ".AspNetCore.Identity.Application");

    if(authCookie){
        headers['Cookie'] = ctx.req.headers.cookie;
    }

    return { ...config, headers };
};