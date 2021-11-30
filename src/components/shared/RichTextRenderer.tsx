import React from 'react';

interface RichTextProps {
    html: string;
}

const RichTextRenderer: React.FC<RichTextProps> = ({ html}) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RichTextRenderer;