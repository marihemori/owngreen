import React from 'react';

import Header from '../../components/Header/Navbar';
import Footer from '../../components/Footer/index';

import AboutUsIntro from '../../components/AboutUsIntro/index';
import AboutUsBoxes from '../../components/AboutUsBoxes/index';

import '../../style/global.css';
import '../../style/normalize.css';

function AboutUs() {
  return (
    <>
      <Header />        
      <AboutUsIntro />
      <AboutUsBoxes />
      <Footer />
    </>
  );
}

export default AboutUs;