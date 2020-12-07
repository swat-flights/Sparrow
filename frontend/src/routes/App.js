import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../page/LandingPage';
import CreateFlights from '../page/AdminAddFlights';
import EditFlights from '../page/AdminEditFlights';
import SearchFlights from '../page/AdminSearchFlights';
import FlightResults from '../page/FlightResults';
import Modal from '../components/Modal';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/createFlights" component={CreateFlights} />
    <Route exact path="/editFlights/:id" component={EditFlights} />
    <Route exact path="/editFlights" component={SearchFlights} />
    <Route exact path="/flightResults" component={FlightResults} />
    <Route exact path="/modal" component={Modal} />
    {' '}
    {/* Testing this component */}
  </BrowserRouter>
);

export default App;
