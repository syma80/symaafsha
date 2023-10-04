
import React from 'react';

import Navbar from './Navbar';
import HomeBody from './Home-body';
import Footer from "./Footer";

import Popup from './popup';


function Home() {

  return (
    <div>  
<Popup/>
    <Navbar/>
    <HomeBody/>
<Footer/>
</div>
    
    
  );
}

export default Home;
