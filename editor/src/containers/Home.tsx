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
import { ComponentStore } from '../stores/ComponentStore';

interface IHomeProps {
    editorSessionStore?: EditorSession;
    componentStore?: ComponentStore;
}

@inject('editorSessionStore')
@inject('componentStore')
@DragDropContext(Html5Backend)
@observer
export default class Home extends React.Component<IHomeProps, {}> {
    public editor: any;

    public onComponentDroppedOnEditor = (detail: any) => {
        this.editor.handler.component.insertInCursor(detail.code);
    }

    public render() {
        const { editorSessionStore } = this.props;
        return (
            <div className='container-fluid'>
                <div className='row' style={{marginTop: '50px'}}>
                    <NavBar />
                </div>
                <div className='row' style={{marginTop: '50px'}}>
                    <div className='col-md-2'>
                        <ComponentsPanel
                            components={this.props.componentStore.componentsKit.components}
                            onDropped={this.onComponentDroppedOnEditor}
                        />
                    </div>
                    <div className='col-md-8'>
                        <Editor
                            ref={editor => this.editor = editor}
                            onChange={editorSessionStore.setCode}
                            code={editorSessionStore.code}
                            onClick={editorSessionStore.findNode}
                            onKnobChange={editorSessionStore.knob.onKnobChange}
                            knobModel={editorSessionStore.knob.knobModel}
                            knob={editorSessionStore.knob.knob}
                        />
                    </div>
                    <div className='col-md-2'>
                        <InsightPanel />
                    </div>
                </div>
            </div>
        );
    }
}
