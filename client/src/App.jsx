import React from 'react';
import Navbar from './components/navbar';
import Balance from './components/balance';
import Swap from './components/swap';
import Ibc from './components/ibc';
import Crescent from './components/priceCrescent';
import Osmmosis from './components/priceOsmo';

function App() {
  return (
    <div className="App"> 
      <div className='container-fluid bg-black'>
        <div className='row '>
        <Navbar />
        </div>
        <Balance />
        <Crescent />
        <Osmmosis />
        {/* <Swap />
        <Ibc /> */}
      </div>
    </div>
  );
}

export default App;
