/**
 * Panel which shows context aware details
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import { Checkbox } from '@blueprintjs/core';
import { IEditorSessionComponentProps } from '../../stores/EditorSessionStore';
import Row from './Row';

interface IInsightPanelProps {
    componentProps: IEditorSessionComponentProps[];
    componentNode: any;
    onChange: () => void;
}

@observer
export default class InsightPanel extends React.Component<IInsightPanelProps, {}> {
    public render() {

        const rows = this.props.componentProps.map(item => {
            return <Row componentProps={item} componentNode={this.props.componentNode} onChange={this.props.onChange}/>;
        });
        return (
            <div className='pt-card' style={{ height: '100%' }}>
                <h5>Button Component {' '}
                    <span className='pt-icon-standard pt-icon-document-open' title='Open component documentation'/>
                </h5>
                <p>A button component which has some awesome functionality</p>
                <table className='pt-table pt-interactive pt-bordered pt-striped'>
                    <thead>
                        <th>Props</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                       {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}
