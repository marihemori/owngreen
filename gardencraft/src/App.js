import React from 'react';

function App() {
  return (
   <div>
    <header>
      <div>
        <img class="logo" src="img/gardencraft.png" alt="Logo of the Gardencraft"></img>
      </div>
      <div>
      <li><a href="aboutus.html">About us</a></li>
      <li><a href="ourproducts.html">Our products</a></li>
      <li><a href="onsale.html">On sale</a></li>
      <li> 
          <input type="text" class="searchbox" placeholder="Search seeds ..."></input>
          <button type="submit" class="searchbtn"><i class="fas fa-search"></i></button>
      </li>
      </div>
    </header>
   </div>
  );
}

export default App;
