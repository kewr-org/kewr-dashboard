import './App.css' ;
import Icon from './tangan.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer,FaSort,FaAngleDoubleRight,FaExchangeAlt } from 'react-icons/fa';
import Navbar from './components/navbar';
import Balance from './components/balance';
import Swap from './components/swap';
import Ibc from './components/ibc';
import Tes from './components/tesswap';
import PriceCheckCrescent from './components/PriceCheckCrescent'

function App() {
  return (
    <div className="App"> 
      <div className='container-fluid bg-black'>
        <div className='row '>
        <Navbar />
        </div>
        <Balance />
        <Swap />
        <Ibc />
        <Tes />
      </div>
      <PriceCheckCrescent 
url1="https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/3"
url2="https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/10" 
url3="https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/19"   
/>
    </div>
  );
}

export default App;
