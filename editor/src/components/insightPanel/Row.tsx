/**
 * Property panel row
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import { IEditorSessionComponentProps } from '../../stores/EditorSessionStore';
import {Component as TextKnob} from '../../knobs/text';
import {Component as BooleanKnob} from '../../knobs/boolean';
import {Component as NumberKnob} from '../../knobs/number';
import componentPropTypes from '../../services/componentPropType';


interface IRowProps {
    componentProps: IEditorSessionComponentProps;
    componentNode: any;
    onChange: () => void;
}

@observer
export default class Row extends React.Component<IRowProps, {}> {
    public render() {
        let knob = null;

        if (this.props.componentProps.propType === componentPropTypes.string) {
            knob = <TextKnob model={this.props.componentProps.model} onChange={this.props.onChange} />;
        } else if (this.props.componentProps.propType === componentPropTypes.boolean) {
            knob = <BooleanKnob model={this.props.componentProps.model} onChange={this.props.onChange} />;
        } else if (this.props.componentProps.propType === componentPropTypes.number) {
            knob = <NumberKnob model={this.props.componentProps.model} onChange={this.props.onChange} />;
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