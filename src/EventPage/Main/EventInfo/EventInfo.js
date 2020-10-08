import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';

import "./EventInfo.css";

function EventInfo() {
    return (
        <div className="eventInfo">
            <div className="eventInfo_content">
                <h1>Simpósio - Autismo e Neurociência</h1>
                <div className="eventInfo_contentLocation">
                    <AccessTimeIcon />
                    <p>19 de setembro de 2020, 10h12h</p>
                </div>
                <div className="eventInfo_contentLocation">
                    <RoomIcon />
                    <p>Evento online</p>
                </div>
            </div>
        </div>
    )
}

export default EventInfo
