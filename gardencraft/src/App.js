import React from 'react';
import './styles/global.css'
import './styles/reset.css'
import Header from './Header';
import Intro from './Intro';
import Seeds from './Seeds';

function App() {
  return (
    <body>
      <Header />
      <Intro />
      <Seeds />
    </body>
  );
}

export default App;
