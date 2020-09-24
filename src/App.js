import React from 'react';
import { Router, Switch, Route } from "react-router-dom"

import './App.css';
import Banner from './Banner/Banner';
import Header from "./Header/Header";
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PaymentSucceeded from "./PaymentSucceeded/PaymentSucceeded";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Banner />
            <Main />
            <Footer />
          </Route>
          <Route path="/success">
            <PaymentSucceeded />
          </Route>
          <Route path="/calendar">
            <div className="calendly">
            <div
              class="calendly-inline-widget" 
              style={{width:"100%", height: "100vh"}}
              data-url="https://calendly.com/lucas-rhoden/teste?background_color=4d5055&text_color=ffffff" />
            </div>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
