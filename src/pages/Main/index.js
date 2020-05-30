import React from 'react';
import Header from '../../components/Header/index';
import Intro from '../../components/Intro/index';
import Topics from '../../components/Topics/index';
import ReceiveNews from '../../components/ReceiveNews/index';
import Footer from '../../components/Footer/index';
import '../../style/global.css';
import '../../style/normalize.css';

function Main() {
  return (
    <body>
      <Header />
      <Intro />
      <Topics />
      <ReceiveNews />
      <Footer />
    </body>
  );
}

export default Main;
