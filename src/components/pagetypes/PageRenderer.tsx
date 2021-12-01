import Head from "next/head"
import dynamic from 'next/dynamic';

import React, { ComponentType } from "react";

import { PageData } from "../../models/pages";
import { PageType } from "../../models/content";

import Header from "../UI/Header";
import Footer from "../UI/Footer";

const PageTypeMapping: Record<PageType, ComponentType<any>> = {
    GenericContentPage: dynamic(() => import('./GenericContentPage')),
    HomePage: dynamic(() => import('./HomePage')),
};

interface PageRendererProps {
    pageData: PageData,
    stylesheet: string
}
const PageRenderer: React.FC<PageRendererProps> = (props) => {

    const componentName = props.pageData.contentType[1];
    const Component = PageTypeMapping[componentName];

    if (!Component) {
        return (
        <div><p>NOT FOUND</p></div>
        );
    }
    return (
        <>
            <div className={`body}`}>
                <div>
                    <Head>
                        <title>Episerver JAMStack Starter</title>
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: props.stylesheet }} />

                    <div id="wrapper">
                        <Header {...props}/>
                        <Component {...props} />
                        <Footer />
                    </div>

                    <div id="bg" />
                </div>
            </div> 
        </>);
};

export default PageRenderer;
