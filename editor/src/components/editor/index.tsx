/**
 * Code editor
 */

import * as React from 'react';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
import 'brace';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const AceEditor = require('react-ace').default;
import 'brace/mode/jsx';
import 'brace/theme/chaos';
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const { DropTarget } = require('react-dnd');
// tslint:disable-next-line:no-require-imports no-var-requires no-require-imports
const client = require('../../../../lib/middleMan/client');
import { observer } from 'mobx-react';
import './style.scss';

interface ISequencePanelProps {
    connectDropTarget?: any;
    code: string;
    onChange: (code: string, position: any) => void;
    onClick: (posision: any) => void;
}

const squareTarget = {
  drop(props, monitor) {
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

@observer
@DropTarget('ACTION', squareTarget, collect)
export default class Editor extends React.Component<ISequencePanelProps, {x: number, y: number}> {
    public connection: any;
    public editor: any;

    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
        };
    }

    public componentDidMount = () => {
        const connection = client('http://localhost:3000', {
            hello: () => {
            }
        });
        this.connection = connection;
        this.editor.editor.on('click', (e) => {
            this.props.onClick(this.editor.editor.getCursorPosition());
            this.setState({
                x: e.x,
                y: e.y
            });
        });

    }

    public onChange = (newValue) => {
        this.props.onChange(newValue, this.editor.editor.getCursorPosition());
        //this.connection.emit('updateFile', newValue);
    }

    public insertInCursor = (code: string) => {
        this.insertInPosition(this.editor.editor.getCursorPosition(), code);
    }

    public insertInPosition = (position: any, code: string) => {
        this.editor.editor.session.insert(position, code);
    }

    public render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div style={{position: 'relative', height: '82vh', width: '100%'}}>
                <AceEditor
                    ref={editor => this.editor = editor}
                    mode='jsx'
                    theme='chaos'
                    name='UNIQUE_ID_OF_DIV'
                    editorProps={{$blockScrolling: true}}
                    onChange={this.onChange}
                    value={this.props.code}
                    fontSize={14}
                    height='inherit'
                    width='inherit'
                />
            </div>
        );
    }
}
