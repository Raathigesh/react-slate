/**
 * Panel which shows context aware details
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import { Checkbox } from '@blueprintjs/core';


@observer
export default class InsightPanel extends React.Component<{}, {}> {
    public render() {
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
                        <tr>
                            <td>
                                <h6>name  <span className='pt-tag pt-minimal pt-intent-success'>Required</span></h6>
                                Name text of the button
                            </td>
                            <td>
                                <input className='pt-input' type='text' placeholder='Text input' dir='auto' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>
                                    isPrimary  <span className='pt-tag pt-minimal pt-intent-primary'>Optional</span>
                                </h6>
                                Is the button a parimary
                            </td>
                            <td>
                                <Checkbox />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>
                                    theme  <span className='pt-tag pt-minimal pt-intent-primary'>Optional</span>
                                </h6>
                                Theme of the button
                            </td>
                            <td>
                                <Checkbox />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6>
                                    type  <span className='pt-tag pt-minimal pt-intent-primary'>Optional</span>
                                </h6>
                                Type of the button
                            </td>
                            <td>
                                <div className='pt-button-group pt-small pt-fill'>
                                    <a className='pt-button' role='button'>Start</a>
                                    <a className='pt-button' role='button'>Left</a>
                                    <a className='pt-button pt-active' role='button'>Middle</a>
                                    <a className='pt-button' role='button'>Right</a>
                                    <a className='pt-button' role='button'>End</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
