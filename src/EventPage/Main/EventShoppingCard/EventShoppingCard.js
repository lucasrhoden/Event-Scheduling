import React from 'react';
import Button from "@material-ui/core/Button/Button"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { loadStripe } from "@stripe/stripe-js";

import "./EventShoppingCard.css"

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_API_KEY}`);


function EventShoppingCard() {

    const handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch("http://localhost:9000/create-session", {
          method: "POST",
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
    };

    return (
        <div className="eventShoppingCard">
            <div className="shoppingCardHeader">
                <p>Sessão Namasweb</p>
                <div className="shoppingCardHeader_right">
                    <ShoppingCartIcon />
                    <p>‎<span style={{fontSize:"12px", marginRight:"2px"}}>‎€</span>10,00</p>
                </div>
            </div>
            <div className="shoppingCardInfo">
                <p>1x sessão individual <span style={{color: "#5eaaa8"}}>online</span></p>
                <div className="shoppingCardInfo_main">
                    <AccessTimeIcon/>
                    <p>60 minutos</p>
                </div>
                <div className="shoppingCardInfo_main">
                    <EventAvailableIcon />
                    <p>Disponivel de Segunda a Sabado das 9hrs as 18hrs</p>
                </div>
            </div>
            <div className="shoppingCardContinue">
                <Button onClick={handleClick}>Comprar</Button>
            </div>
            <hr />
            <div className="shoppingCardInfo">
                <p>1x sessão individual <span style={{color: "#ff4b5c"}}>presencial</span></p>
                <div className="shoppingCardInfo_main">
                    <AccessTimeIcon/>
                    <p>60 minutos</p>
                </div>
                <div className="shoppingCardInfo_main">
                    <EventAvailableIcon />
                    <p>Disponivel de Terça a Sexta das 18hrs as 20hrs</p>
                </div>
            </div>
            <div className="shoppingCardContinue">
                <Button onClick={handleClick}>Comprar</Button>
            </div>
        </div>
    )
}

export default EventShoppingCard
