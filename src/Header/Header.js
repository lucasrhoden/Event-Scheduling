import React from 'react';
import "./Header.css";

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
                    <p>content</p>
                </div>
            </div>
        </div>
    )
}

export default Header
