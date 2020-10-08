import React, { useEffect, useState } from 'react';
import axios from "axios";

import "./Calendar.css"

function Calendar() {

    return (
        <div className="calendly">
            <button onClick={() => window.location.reload()}>Continuar como Lucas</button>
            <div 
                className="calendly-inline-widget" 
                style={{width: "100%", height: "100vh"}}
                data-url="https://calendly.com/lucas-rhoden/terapia-de-qualquer-coisa">
            </div>
        </div>
    )
}

export default Calendar
