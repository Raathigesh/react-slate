/**
 * Navigation bar
 */

import * as React from 'react';
import {
    Popover,
    PopoverInteractionKind,
    Position,
    AnchorButton,
    Intent,
    Tabs,
    TabList,
    Tab,
    TabPanel
} from '@blueprintjs/core';

class NavBar extends React.Component<{}, {}> {
    public getPreferenceComponentContent = () => {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Installed Kits</Tab>
                        <Tab>Install New Kits</Tab>
                    </TabList>
                    <TabPanel>
                        <table className='pt-table pt-condensed pt-bordered'>
                            <tbody>
                                <tr>
                                    <td>Blueprint</td>
                                    <td>v1.0.1</td>
                                    <td>
                                        <a href=''>Uninstall</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Semantic UI</td>
                                    <td>v1.0.0</td>
                                    <td>
                                        <a href=''>Uninstall</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                    <TabPanel>
                        <table className='pt-table pt-condensed pt-bordered'>
                            <tbody>
                                <tr>
                                    <td>React Toolbox</td>
                                    <td>
                                        <a href=''>Install</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ant Design</td>
                                    <td>
                                        <a href=''>Install</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
    public render() {
        const componentKitList = (
            <ul className='pt-menu pt-elevation-1'>
                <li>
                    <a className='pt-menu-item pt-icon-people' >Share...</a>
                </li>
                <li>
                    <a className='pt-menu-item pt-icon-circle-arrow-right' >Move...</a>
                </li>
                <li>
                    <a className='pt-menu-item pt-icon-edit' >Rename</a>
                </li>
            </ul>
        );

        return (
            <nav className='pt-navbar pt-dark pt-fixed-top'>
                <div className='pt-navbar-group pt-align-left'>
                    <div className='pt-navbar-heading'>React Slate</div>
                    <Popover
                        content={componentKitList}
                        interactionKind={PopoverInteractionKind.CLICK}
                        position={Position.BOTTOM}
                        useSmartPositioning={false}>
                        <button type='button' className='pt-button'>
                            <span className='pt-icon-standard pt-icon-control' />
                            React Hello World
                            <span className='pt-icon-standard pt-icon-caret-down pt-align-right' />
                        </button>
                    </Popover>
                </div>
                <div className='pt-navbar-group pt-align-right'>
                    <AnchorButton
                        text='http://localhost:9000'
                        iconName='pt-icon-application'
                        rightIconName='pt-icon-link'
                        intent={Intent.PRIMARY}
                        />
                    <span className='pt-navbar-divider' />
                    <Popover
                        content={this.getPreferenceComponentContent()}
                        popoverClassName='pt-popover-content-sizing'
                        interactionKind={PopoverInteractionKind.CLICK}
                        position={Position.BOTTOM_RIGHT}
                        useSmartPositioning={false}>
                        <button className='pt-button pt-minimal pt-icon-cog' />
                    </Popover>
                </div>
            </nav>
        );
    }
}

export default NavBar;
