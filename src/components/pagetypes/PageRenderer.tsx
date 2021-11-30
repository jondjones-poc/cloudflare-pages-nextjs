import React, { ComponentType } from "react";
import { PageData } from "../../models/pages";
import dynamic from 'next/dynamic';
import { PageType } from "../../models/content";

const PageTypeMapping: Record<PageType, ComponentType<any>> = {
    GenericContentPage: dynamic(() => import('./GenericContentPage')),
    HomePage: dynamic(() => import('./HomePage')),
};

interface PageRendererProps {
    pageData: PageData
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

            <Component {...props} />
        </>);
};

export default PageRenderer;

