/**
 * Components panel
 */

import * as React from 'react';
import ComponentItem from './item';
import ComponentMeta from '../../stores/ComponentMeta';

interface IComponentPanelProps {
    components: ComponentMeta[];
    onDropped: (code: any) => void;
}

export default class ComponentsPanel extends React.Component<IComponentPanelProps, {}> {
    public render() {
        const components = this.props.components.map(component => {
            return <ComponentItem detail={component} onDropped={this.props.onDropped} />;
        });

        return (
            <div>
                {components}
            </div>
        );
    }
}
