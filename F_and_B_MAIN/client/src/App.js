import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Banner from './components/Heading/Heading';
import About from './components/About/About';
import Services from './components/Services/Services';
import Technology from './components/Technology/Technology';
import Client from './components/Client/Client.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import UserDashboard from './components/UserDashboard/UserDashboard';
const App = () => (
  <BrowserRouter>
    
        <Route exact path="/"  component={Banner} />
        <Route exact path="/"  component={About} />
        <Route exact path="/"  component={Services} />
        <Route exact path="/"  component={Technology} />
        <Route exact path="/"  component={Client} />
        <Route exact path="/"  component={Testimonials} />
        <Route exact path="/"  component={Footer} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/UserDashboard" component={UserDashboard} />
    
  </BrowserRouter>
);

export default App;
