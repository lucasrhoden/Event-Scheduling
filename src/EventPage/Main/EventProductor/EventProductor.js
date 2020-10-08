import React from 'react';
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from '@material-ui/core/Button';

import "./EventProductor.css"

function EventProductor() {
    return (
        <div className="eventProductor">
            <h3>SOBRE O ORGANIZADOR</h3>
            <div className="eventProductor_main">
                <div className="eventProductor_avatar">
                    <Avatar src="https://images.sympla.com.br/5f21bdde044d8.jpg"/>
                </div>
                <div className="eventProductor_info">
                    <p>Simpósio de Neurociência do Comportamento</p>
                    <div className="eventProductor_more">
                        <Button variant="outlined">Fale com o organizador</Button>
                        <Button variant="outlined">Mais Eventos</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventProductor
