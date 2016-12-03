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
            <div className='pt-card' style={{ height: '100%' }}>
                <div className='pt-input-group' style={{ marginBottom: '10px' }}>
                    <span className='pt-icon pt-icon-search' />
                    <input className='pt-input' type='search' placeholder='Search components...' dir='auto' />
                </div>
                <div className='pt-card pt-elevation-1' style={{
                    backgroundColor: '#0258b0',
                    color: 'white',
                    marginBottom: '10px',
                    padding: '9px'
                }}>
                    My Components
                </div>
                <div className="pt-card .modifier">
                    <span className="pt-icon-standard pt-icon-projects"></span>
                </div>
                <div className='pt-card pt-elevation-1' style={{
                    backgroundColor: '#0258b0',
                    color: 'white',
                    marginBottom: '10px',
                    padding: '9px'
                }}>
                    My Components
                </div>
                {components}
            </div>
        );
    }
}
