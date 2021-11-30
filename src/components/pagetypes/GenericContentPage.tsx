import React from 'react'
import { GenericContentPageData, PageData } from '../../models/pages';
import BlockRenderer from '../blocks/BlockRenderer';

interface GenericContentPageProps {
    pageData : GenericContentPageData;
}

const GenericContentPage: React.FC<GenericContentPageProps> = ({ pageData }) => {
    return (
        <div>
            hi
            <h1 data-epi-edit="name">{pageData.name}</h1>
            <div data-epi-edit="mainContentArea">
            {pageData.mainContentArea?.map(({ contentLink }, k) => (
                <div data-epi-content-id={contentLink.guidValue} key={k}>
                <BlockRenderer blockData={contentLink.expanded}/>
                </div>
            ))}
            </div>
           
        </div>
    )
}

export default GenericContentPage;