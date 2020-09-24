import React from 'react';
import Button from "@material-ui/core/Button/Button"
import { loadStripe } from "@stripe/stripe-js";

import "./EventShoppingCard.css"

const stripePromise = loadStripe('pk_test_51HSqpGAkpZ9RWuiWsymw3iee2yZ3I8YEpHc8uwpo5F2yh5T2dOHz63VGkyHZUSndgYfPk5P2f7yKDF65S6NzoE6e00xDk09XaN');


function EventShoppingCard() {

    const handleClick = async (event) => {
          // When the customer clicks on the button, redirect them to Checkout.
          const stripe = await stripePromise;
          const { error } = await stripe.redirectToCheckout({
            lineItems: [{
              price: 'price_1HT8piAkpZ9RWuiWjqfGRT5Z', // Replace with the ID of your price
              quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'http://localhost:3000/success',
            cancelUrl: 'https://example.com/cancel',
          });
          console.log(error)
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `error.message`.
      
        };

    return (
        <div className="eventShoppingCard">
            <div className="shoppingCardHeader">
                <p>Inscrição</p>
                <div className="shoppingCardHeader_right">
                    <p>icon</p>
                    <p>$10,00</p>
                </div>
            </div>
            <div className="shoppingCardInfo">
                <p>Inscrição individual</p>
                <p>valor</p>
                <p>Inscrições até ...</p>
            </div>
            <div className="shoppingCardContinue">
                <Button onClick={handleClick}>Continuar</Button>
            </div>
        </div>
    )
}

export default EventShoppingCard
