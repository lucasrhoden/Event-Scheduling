import React from 'react';

import "./EventPage.css";
import Header from "./Header/Header";
import Backdrop from "../UI/Backdrop/Backdrop";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Sidenav from "../UI/Sidenav/Sidenav";

function EventPage() {
    return (
        <div className="eventPage">
            <Header />
            {/* <Backdrop>
                <Sidenav />
            </Backdrop> */}
            <Banner />
            <Main />
            <Footer />
        </div>
    )
}

export default EventPage
