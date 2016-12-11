/**
 * Property panel row
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import { IEditorSessionComponentProps } from '../../stores/EditorSessionStore';
import {Component as TextKnob, Model as TextModel} from '../../knobs/text';

interface IRowProps {
    componentProps: IEditorSessionComponentProps;
    componentNode: any;
    onChange: () => void;
}

@observer
export default class Row extends React.Component<IRowProps, {}> {
    public render() {
        let knob = null;

        if (this.props.componentProps.propType === 'string') {
            const textModel = new TextModel(this.props.componentProps.name, this.props.componentNode);
            knob = <TextKnob model={this.props.componentProps.model} onChange={this.props.onChange} />;
        }

        return (
            <tr>
                <td>
                    <h6>
                        {this.props.componentProps.name}
                        {
                            this.props.componentProps.required
                            && <span className='pt-tag pt-minimal pt-intent-success'>Required</span>
                        }
                    </h6>
                    Name text of the button
                </td>
                <td>
                    {knob}
                </td>
            </tr>
        );
    }
}