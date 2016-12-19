/**
 * Home view
 */
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import '@blueprintjs/core/dist/blueprint.css';
import 'flexboxgrid/css/flexboxgrid.css';
import Editor from '../components/editor';
import NavBar from '../components/nabBar';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const { DragDropContext } = require('react-dnd');
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const Html5Backend = require('react-dnd-html5-backend');
import ComponentsPanel from '../components/componentsPanel';
import InsightPanel from '../components/insightPanel';
import { EditorSession } from '../stores/EditorSessionStore';
import { ConfigStore } from '../stores/config';
import Notification from '../components/notification';
import './style.scss';

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
            <div className='container-fluid app-container'>
                <Notification
                    message={configStore.notification.message}
                    notificationType={configStore.notification.notificationType}
                />
                <div className='row'>
                    <NavBar
                      componentKitsConfigs={configStore.installedComponentKits}
                      activeComponentKit={configStore.activeComponentKit}
                      onComponentKitChange={configStore.setActiveComponentKit}
                      onModuleInstall={configStore.installModule}
                      dependencies={editorSessionStore.dependencies}
                      onModuleUninstall={configStore.uninstallModule}
                      isInProgress={configStore.isInProgress}
                      componentKitInfo={configStore.componentKitInfo}
                      onComponentInstall={configStore.installComponentKit}
                      onComponentUnInstall={configStore.uninstallComponentKit}
                    />
                </div>
                <div className='row' style={{marginTop: '60px'}}>
                    <div className='col-md-2 componentPanel'>
                        <ComponentsPanel
                            components={editorSessionStore.filteredComponent}
                            onDropped={this.onComponentDroppedOnEditor}
                            searchText={editorSessionStore.componentSearchText}
                            onSearchTextChange={editorSessionStore.setFitlerText}
                        />
                    </div>
                    <div className='col-md-7 editorPanel'>
                        <Editor
                            ref={editor => this.editor = editor}
                            onChange={editorSessionStore.setCode}
                            code={editorSessionStore.code}
                            onClick={editorSessionStore.findNode}
                            onSave={configStore.writeCode}
                        />
                    </div>
                    <div className='col-md-3 propertyPanel'>
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
