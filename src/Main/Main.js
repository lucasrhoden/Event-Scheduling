import React from 'react'

import "./Main.css";
import EventInfo from "./EventInfo/EventInfo";
import EventDescription from './EventDescription/EventDescription';
import EventProductor from './EventProductor/EventProductor';
import EventShoppingCard from "./EventShoppingCard/EventShoppingCard";

function Main() {
    return (
        <div className="main">
            <EventInfo />
            <h1>Test4</h1>
            <EventShoppingCard />
            <EventDescription />
            <EventProductor />
            {/* <div class="fb-comments" data-href="http://localhost:3000" data-numposts="5" data-width=""></div> */}
        </div>
    )
}

export default Main

