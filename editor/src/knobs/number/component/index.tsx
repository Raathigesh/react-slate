/**
 * A text knob
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import Model from '../model';

interface ITextKnobProp {
    model: Model;
    onChange: (model: Model) =>  void;
}

@observer
export default class Text extends React.Component<ITextKnobProp, {}> {
    public handleChange = (e) => {
        this.props.model.setText(Number(e.target.value));
        this.props.onChange(this.props.model);
    }
    public render() {
        return (
            <input
                className='pt-input .modifier'
                type='text'
                placeholder='Text input'
                dir='auto'
                value={this.props.model.value}
                onChange={this.handleChange}
            />
        );
    }
}
