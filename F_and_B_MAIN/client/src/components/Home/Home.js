import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Banner from './Heading/Heading.jsx';
import About from './About/About.jsx';
import Services from './Services/Services.jsx';
import Technology from './Technology/Technology.jsx';
import Client from './Client/Client.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Footer from './Footer/Footer.jsx';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  return (
    <>
      <Banner />
      <About />
      <Services />
      <Technology />
      <Client />
      <Testimonials />
      <Footer />
    </>
  );
};
export default Home;
