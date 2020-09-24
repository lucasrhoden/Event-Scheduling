import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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
          <Route path="/Event-Scheduling/" exact>
            <Header />
            <Banner />
            <Main />
            <Footer />
          </Route>
          <Route path="/Event-Scheduling/success">
            <PaymentSucceeded />
          </Route>
          <Route path="/Event-Scheduling/calendar">
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
