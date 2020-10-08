import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <div className="header_content">
                <div className="header_contentOrganization">
                    <p>Fale com o organizador:</p>
                    <a href>Namasweb</a>
                </div>
                <div className="header_contentLogo">
                    <h1>Namasweb</h1>
                </div>
                <div className="header_contentRight">
                    <p>login</p>
                </div>
                {/* <div className="header_sidemenu">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </div> */}
            </div>
        </div>
    )
}

export default Header
