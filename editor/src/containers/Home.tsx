/**
 * Home view
 */
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import '@blueprintjs/core/dist/blueprint.css';
import 'flexboxgrid/css/flexboxgrid.css';
import {} from '@blueprintjs/core';
import Editor from '../components/editor';
import Preview from '../components/preview';
import NavBar from '../components/nabBar';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const { DragDropContext } = require('react-dnd');
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const Html5Backend = require('react-dnd-html5-backend');
import ComponentsPanel from '../components/componentsPanel';
import InsightPanel from '../components/insightPanel';
import { EditorSession } from '../stores/EditorSessionStore';
import { ConfigStore } from '../stores/config';

interface IHomeProps {
    editorSessionStore?: EditorSession;
    configStore?: ConfigStore;
}

@inject('editorSessionStore')
@inject('configStore')
@DragDropContext(Html5Backend)
@observer
export default class Home extends React.Component<IHomeProps, {}> {
    public editor: any;

    public onComponentDroppedOnEditor = (detail: any) => {
        this.editor.handler.component.insertInCursor(this.props.editorSessionStore.getComponentSnippet(detail));
        this.props.editorSessionStore.addImport(detail.exported);
    }

    public render() {
        const { editorSessionStore, configStore } = this.props;
        return (
            <div className='container-fluid'>
                <div className='row' style={{marginTop: '50px'}}>
                    <NavBar
                      componentKitsConfigs={this.props.configStore.installedComponentKits}
                      activeComponentKit={this.props.configStore.activeComponentKit}
                      onComponentKitChange={this.props.configStore.setActiveComponentKit}
                    />
                </div>
                <div className='row' style={{marginTop: '50px'}}>
                    <div className='col-md-2'>
                        <ComponentsPanel
                            components={this.props.editorSessionStore.filteredComponent}
                            onDropped={this.onComponentDroppedOnEditor}
                            searchText={this.props.editorSessionStore.componentSearchText}
                            onSearchTextChange={this.props.editorSessionStore.setFitlerText}
                        />
                    </div>
                    <div className='col-md-6'>
                        <Editor
                            ref={editor => this.editor = editor}
                            onChange={editorSessionStore.setCode}
                            code={editorSessionStore.code}
                            onClick={editorSessionStore.findNode}
                            onSave={configStore.writeCode}
                        />
                    </div>
                    <div className='col-md-4'>
                        <InsightPanel
                            componentInfo={editorSessionStore.componentsMeta}
                            componentProps={editorSessionStore.props}
                            componentNode={editorSessionStore.componentNode}
                            onChange={editorSessionStore.regenerateCode}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
