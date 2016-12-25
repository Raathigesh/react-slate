/**
 * Left panel component
 */

import * as React from 'react';
import ProjectPanel from '../projectPanel';
import ComponentMeta from '../../stores/ComponentMeta';
import ComponentsPanel from '../componentsPanel';

interface ILeftPanelProps {
    components: ComponentMeta[];
    onDropped: (code: any) => void;
    onSearchTextChange: (text: string) => void;
    searchText: string;
    files: string[];
    onNodeClick: (fileName: string) => void;
    activeFileName: string;
    isActiveFileDirty: boolean;
    onDelete: (fileName: string) => void;
}

export default class LeftPanel extends React.Component<ILeftPanelProps, {}> {
    public render() {
        return (
            <div className='pt-card' style={{ height: '100%' }}>
                <ProjectPanel
                    files={this.props.files}
                    onNodeClick={this.props.onNodeClick}
                    activeFileName={this.props.activeFileName}
                    isActiveFileDirty={this.props.isActiveFileDirty}
                    onDelete={this.props.onDelete}
                />
                <ComponentsPanel
                    {...this.props}
                />
            </div>
        );
    }
}
