import { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { BlockData } from '../../models/blocks';
import { BlockType } from '../../models/content';

const BlockTypeMapping: Record<BlockType, ComponentType<any>> = {
    TextBlock: dynamic(() => import('./TextBlock')),
};

interface BlockRendererProps {
    blockData: BlockData;
}
const BlockRenderer: React.FC<BlockRendererProps> = ({ blockData }) => {
    const componentName = blockData.contentType[1];
    const Component = BlockTypeMapping[componentName];
    return Component ? <Component {...blockData} /> : null;
};

export default BlockRenderer;