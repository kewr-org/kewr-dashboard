import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Keplr from '../keplr.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar() {

  const [address, setAddress] = useState('');

  //  keplr
 async function handleClick(chain) {
  const chainId = chain ? chain : 'cosmoshub-1'
  await window.keplr.enable(chainId)
  const offlineSigner = window.getOfflineSigner(chainId);
  const accounts = await offlineSigner.getAccounts();
  setAddress(accounts[0].address)
 }
// akhir keplr

  return (
    <div className='bg-black'>
      <div className='row'>
      <div className='col-6 text-white'>
        <h3>Kewr Foundation</h3>
      </div>
      <div className='col-6 text-white text-end'>
        <button className='btn btn-outline-info text-white'></button>
        <button className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"><img src={Keplr} width='30' />{address ? address : 'Connect Wallet'}</button>
        <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Chain Id
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => handleClick('cosmoshub-1')}>Cosmos</Dropdown.Item>
        <Dropdown.Item href="#/action-1" onClick={() => handleClick('osmosis-1')}>Osmosis</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={() => handleClick('irishub-1')} >Iris</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={() => handleClick('crescent-1')}> Crescent </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
      </div>
    </div>
  )
}

export default Navbar