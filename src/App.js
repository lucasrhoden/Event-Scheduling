import React from 'react';
import { HashRouter, Route } from "react-router-dom"

import './App.css';
import EventPage from "./EventPage/EventPage";
import PaymentSucceeded from "./PaymentSucceeded/PaymentSucceeded";
import Calendar from "./Calendar/Calendar";



function App() {
  return (
    <HashRouter basename='/'>
      <Route path="/" exact component={EventPage} />
      <Route path="/success" component={PaymentSucceeded} />
      <Route path="/calendar" component={Calendar} />
    </HashRouter>
  );
}

export default App;
