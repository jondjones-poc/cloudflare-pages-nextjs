import { GetServerSidePropsContext } from "next";
import nookies from 'nookies';

export function getCookie(ctx:GetServerSidePropsContext, cookieName:string){
    const cookies = nookies.get(ctx) as Record<string, string | undefined>;
    return cookies[cookieName];
}
