import React, {useState} from 'react';
import Icon from '../tangan.jpg';
import { Button } from 'react-bootstrap';

function Ibc() {

  const [muncul, setMuncul] = useState();
  async function setHandleClick() {
    setMuncul('REWO TOTAL')
    console.log('rewo')
  }


  return (
    <div className='row mt-5'>
      <div className='col-6 text-white text-center'>
        <img src={Icon} width='400' />
      </div>
      <div className='col-6 text-white'>
            <div className='row mt-5'>
            <div className='col-12'>
            <select className='form-select bg-black text-white border border-info text-center'>
              <option>CosmosHub - Osmosis</option>
              <option>CosmosHub - Iris</option>
              <option>CosmosHub - Gravity Bridge</option>
              <option>CosmosHub - Crescent</option>
              <option>Osmosis - CosmosHub</option>
              <option>Osmosis - Iris</option>
              <option>Osmosis - Gravity Bridge</option>
              <option>Osmosis - </option>
              <option>Iris - Osmosis</option>
              <option>Iris - Osmosis</option>
              <option>Iris - Osmosis</option>
              <option>Iris - Osmosis</option>
            </select>
            </div>
          </div>
          <div className='row mt-5 text-center'>
            <div className='col-3 text-white'>
              <h4>Select a Chain</h4>
              <select className='form-select bg-black text-white border border-white'>
                <option>Osmosis</option>
                <option>Crescent</option>
                <option>Iris</option>
                <option>Grav</option>
              </select>
            </div>
            <div className='col-2 text-white'>
              <h4 className='mt-4'></h4>
            </div>
            <div className='col-3 text-white'>
              <h4>Select a Chain</h4>
            <select className='form-select bg-black text-white border border-white'>
                <option>Osmosis</option>
                <option>Crescent</option>
                <option>Iris</option>
                <option>Grav</option>
              </select>
            </div>
            <div className='col-2 text-white'>
              <h4>Coin</h4>
            <select className='form-select bg-black text-white border border-white'>
                <option>Osmosis</option>
                <option>Crescent</option>
                <option>Iris</option>
                <option>Grav</option>
              </select>
            </div>
            <div className='col-2 text-white'>
              <h4>{muncul}</h4>
              <Button variant='outline-info mt-4' onClick={() =>setHandleClick ()}>Submit</Button>
            </div>
          </div>
            </div>
    </div>
  )
}

export default Ibc