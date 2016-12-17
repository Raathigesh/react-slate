/**
 * Components panel
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import ComponentItem from './item';
import ComponentMeta from '../../stores/ComponentMeta';

interface IComponentPanelProps {
    components: ComponentMeta[];
    onDropped: (code: any) => void;
    onSearchTextChange: (text: string) => void;
    searchText: string;
}

@observer
export default class ComponentsPanel extends React.Component<IComponentPanelProps, {}> {

    public handleSearch = (e) => {
        const val = e.target.value;
        this.props.onSearchTextChange(val);
    }

    public render() {
        const components = this.props.components.map(component => {
            return <ComponentItem detail={component} onDropped={this.props.onDropped} />;
        });

        return (
            <div className='pt-card' style={{ height: '100%' }}>
                <div className='pt-input-group' style={{ marginBottom: '10px' }}>
                    <span className='pt-icon pt-icon-search' />
                    <input
                        className='pt-input'
                        type='search'
                        placeholder='Search components...'
                        dir='auto'
                        onChange={this.handleSearch}
                        value={this.props.searchText}
                    />
                </div>
                {components}
            </div>
        );
    }
}
