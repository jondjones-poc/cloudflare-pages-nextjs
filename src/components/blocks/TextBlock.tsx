import React from "react";
import { TextBlockData } from "../../models/blocks";
import RichTextRenderer from "../shared/RichTextRenderer";

export const TextBlock: React.FC<TextBlockData> = (mainBody) => {
    console.log('TextBlock', mainBody)
    return (
        <div className="richtext-typography max-w-prose mx-auto" data-api-block-level-edit-id={mainBody.contentLink.id}>
            {mainBody && <RichTextRenderer html={mainBody.mainBody} />}
        </div>
    );
};

export default TextBlock;