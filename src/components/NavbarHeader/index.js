import React from 'react';

class NavbarHeader extends React.Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <div className="ui simple dropdown item">
                        APP - Videos
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarHeader;