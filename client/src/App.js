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
    </div>
  );
}

export default App;
