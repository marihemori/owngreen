import React from 'react';
import './styles/global.css'
import './styles/reset.css'
import Header from './Header';
import Intro from './Intro';
import Seeds from './Seeds';
import Fertilizers from './Fertilizers';
import Tools from './Tools';
import ReceiveNews from './Receive_news';
import Footer from './Footer';
import MadeBy from './Made_By';

function App() {
  return (
    <body>
      <Header />
      <Intro />
      <Seeds />
      <Fertilizers />
      <Tools />
      <ReceiveNews />
      <Footer />
      <MadeBy />
    </body>
  );
}

export default App;
