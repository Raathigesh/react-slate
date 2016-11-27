/**
 * A knob floater which appears on mouse location
 */

import * as React from 'react';
import { observer } from 'mobx-react';

interface IKnobFloaterProps {
    location: {
        x: number,
        y: number
    };
    knob: any;
    knobModel: any;
    onKnobChange: (model: any) => void;
}

@observer
export default class KnobFloater extends React.Component<IKnobFloaterProps, {}> {
    public render() {
        const knob = this.props.knob && React.createElement(this.props.knob, {
            model: this.props.knobModel,
            onChange: this.props.onKnobChange
        });

        return (
            <div style={{top: this.props.location.y, left: this.props.location.x, zIndex: 999, position: 'fixed'}}>
                {knob}
            </div>
        );
    }
}
