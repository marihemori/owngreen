import React, { Component } from 'react';
import './styles/footer.css';

const FMadeBy = () => {
 return (
  <div class="made_by">
   Made with <i class="fa fa-heart pulse"></i> 
   by <a href="https://github.com/marianamorais" target="_blank"> Mariana Morais</a>
  </div>
 )
}

class MadeBy extends Component {
 render() {
  return (
   <FMadeBy />
  )
 }
}

export default MadeBy;
