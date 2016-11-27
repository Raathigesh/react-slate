/**
 * Component panel item
 */

import * as React from 'react';
import ComponentMeta from '../../../stores/ComponentMeta';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const { DragSource } = require('react-dnd');
import './style.scss';

const knightSource = {
    beginDrag(props) {
        return {
            detail: props.detail
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        props.onDropped(item.detail);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

interface IActionMiniProps {
    detail: ComponentMeta;
    connectDragSource?: any;
    isDragging?: boolean;
    onDropped?: (id: string) => void;
}

@DragSource('ACTION', knightSource, collect)
export default class ComponentItem extends React.Component<IActionMiniProps, {}> {
    public render() {
        const { connectDragSource } = this.props;
        return connectDragSource(
            <div className='pt-card pt-elevation-0 pt-interactive slate-component-item'>
                <h5>{this.props.detail.name}</h5>
                <p>{this.props.detail.description}</p>
            </div>
        );
    }
}
