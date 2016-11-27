/**
 * Navigation bar
 */

import * as React from 'react';

class NavBar extends React.Component<{}, {}> {
    public render() {
        return (
            <nav className='pt-navbar pt-dark pt-fixed-top'>
                <div className='pt-navbar-group pt-align-left'>
                    <div className='pt-navbar-heading'>React Slate</div>
                </div>
                <div className='pt-navbar-group pt-align-right'>
                    <button className="pt-button pt-minimal pt-icon-page-layout">http://localhost:9000</button>
                    <span className="pt-navbar-divider" />
                    <button className='pt-button pt-minimal pt-icon-cog' />
                </div>
            </nav>
        );
    }
}

export default NavBar;
