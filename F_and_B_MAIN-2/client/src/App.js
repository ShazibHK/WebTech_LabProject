import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import AdminDashboard from './components/AdminDashboard/Dasboard.jsx';
import Analytics from './components/AdminDashboard/Analytics.js';
import PartnerCount from './components/AdminDashboard/PartnerCount.js';
import Deals from './components/Deals/Deals';
import Home from './components/Home/Home';
import Partners from './components/Partners/Deals';
import Products from './components/Products/Products';
import ProductAndForm from './components/ProductAndForm/ProductAndForm';
import ProposalForm from './components/Form/Form2';
import Form3 from './components/Form/Form3';
import AddProduct from './components/Form/AddProduct';
import UserDashboard from './components/UserDashboard/UserDashboard';
import OfferedTrades from './components/OfferedTrade/OfferedTrades';
import DisplayProducts from './components/DisplayProducts/DisplayProducts.js';
import DisplayOrders from './components/DisplayOrders/Orders.js';
import DisplayOrdersCustomers from './components/DisplayOrdersCustomers/DisplayOrdersCustomers.js';
import Order from './components/DisplayProducts/DisplayProduct/Order.js';
import ProposalAcceptance from './components/Deals/ProposalAcceptance/ProposalAcceptance';

const App = () => (  
  <BrowserRouter>
        <Route exact path="/"  component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/Analytics" component={Analytics} />
        <Route exact path="/Form3" component={Form3} />
        <Route exact path="/Admin"  component={AdminDashboard} />
        <Route exact path="/DisplayProducts" component={DisplayProducts} />
        <Route exact path="/DisplayOrders" component={DisplayOrders} />
        <Route exact path="/DisplayOrdersCustomers" component={DisplayOrdersCustomers} />
        <Route exact path="/Deals" component={Deals} />
        <Route exact path="/OfferedTrades"  component={OfferedTrades} />
        <Route exact path="/Order"  component={Order} />
        <Route exact path="/Partners"  component={Partners} />
        <Route exact path="/Products"  component={Products} />
        <Route exact path="/ProductAndForm"  component={ProductAndForm} />
        <Route exact path="/ProposalForm"  component={ProposalForm} />
        <Route exact path="/ProposalAcceptance"  component={ProposalAcceptance} />
        <Route exact path="/UserDashboard" component={UserDashboard} />    
        <Route exact path="/PartnerCount" component={PartnerCount} />    
  </BrowserRouter>
);

export default App;
