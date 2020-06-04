import React from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import Intro from '../../components/Intro/index';
import Topics from '../../components/Topics/index';
import ReceiveNews from '../../components/ReceiveNews/index';

import '../../style/global.css';
import '../../style/normalize.css';

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
