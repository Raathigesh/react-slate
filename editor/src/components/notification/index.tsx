/**
 * Notification component
 */

import * as React from 'react';
import { observer } from 'mobx-react';
import { Position, Toaster } from '@blueprintjs/core';

interface INotificationProps {
    notificationType: string;
    message: string;
}

@observer
export default class Notification extends React.Component<INotificationProps, {}> {
    private toaster: Toaster;
    public componentWillReceiveProps = (nextProps: INotificationProps) => {
        if (nextProps.message !== '' && nextProps.message !== this.props.message) {
            this.toaster.show({
                message: nextProps.message
            });
        }
    }

    public render() {
        return (
            <Toaster position={Position.TOP} ref={comp => this.toaster = comp} />
        );
    }
}
