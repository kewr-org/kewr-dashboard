import React, { useState } from 'react';
import { FaSort} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Logo from '../globe.jpeg';
import Osmosis from '../osmosis.png';
import Iris from '../iris.jpg';
import Crescent from '../crescent.jpg';

function Swap() {
  const [amount, setAmount] = useState(0);

  async function getAmount(value) {
    const { data } = await axios.get('http://localhost:5000/balances/osmo/')
    setAmount(value)
  }
  
  return (
    <div className='row text-white text-center mt-5 '>
          <div className='col-2'>
            <h4 className='mt-5'> <img src={Osmosis} className='rounded-circle' width='50' /> Osmosis</h4>
            <select className='mt-5 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <input className='input bg-black text-white mt-2' type="number" onChange={(e) => getAmount(e.target.value)} placeholder="0" />
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <input className='input bg-black text-white mt-2' type="number" value={amount} placeholder="0" />
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Iris} className='rounded-circle' width='50' /> Iris</h4>
          <select className='mt-5 form-select bg-black text-white border border-white' >
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <input className='input bg-black text-white mt-2' type="number" onChange={(e) => getAmount(e.target.value)} placeholder="0" />
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-white border border-white'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <input className='input bg-black text-white mt-2' type="number" value={amount} placeholder="0" />
            <h4></h4>
            <Button variant='outline-light'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Crescent} className='rounded-circle' width='50' /> Crescent</h4>
          <select className='mt-5 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
              <option>Atom</option>
            </select>
            <input className='input bg-black outline-blue text-white mt-2' type="number" onChange={(e) => getAmount(e.target.value)} placeholder="0" />
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
              <option>bCre</option>
            </select>
            <input className='input bg-black text-white mt-2' type="number" value={amount} placeholder="0" />
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-6'>
          <img src={Logo} width="500"/>
          </div>
        </div>
  )
}

export default Swap