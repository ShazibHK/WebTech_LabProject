import React from 'react';
import Banner from './Heading';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Technology from './Technology';
import Client from './Client';
import Testimonials from './Testimonials.jsx';
function App(){

    return <div> 
            <Banner /> 
            <About />
            <Services />
            <Technology />
            <Client />
            <Testimonials />
            <Footer />
            
           </div>
}

export default App;