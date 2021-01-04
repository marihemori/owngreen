import React from 'react';

import Header from '../../components/Header/Navbar';
import Footer from '../../components/Footer/index';

import Intro from '../../components/Intro/index';
import Topics from '../../components/Topics/index';
import ReceiveNews from '../../components/ReceiveNews/index';

function Main() {
  return (
    <>
      <Header />
      <Intro />
      <Topics />
      <ReceiveNews />
      <Footer />
    </>
  );
}

export default Main;
