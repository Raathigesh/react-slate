/**
 * Panel which shows context aware details
 */

import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export default class InsightPanel extends React.Component<{}, {}> {
    public render() {
        return (
            <div className='pt-card' style={{height: '100%'}}>
                <h5>Button Component</h5>
                <p>A button component which has some awesome functionality</p>
                <table className='pt-table pt-interactive'>
                    <thead>
                        <th>Props</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Blueprint <span className='pt-tag pt-minimal pt-intent-success'>Done</span></td>
                        <td>CSS framework and UI toolkit</td>
                        </tr>
                        <tr>
                        <td>TSLint</td>
                        <td>Static analysis linter for TypeScript</td>
                        </tr>
                        <tr>
                        <td>Plottable</td>
                        <td>Composable charting library built on top of D3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
