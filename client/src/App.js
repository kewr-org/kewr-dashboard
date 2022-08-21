import './App.css' ;
import Logo from './globe.jpeg';
import Osmosis from './osmosis.png';
import Iris from './iris.jpg';
import Crescent from './crescent.jpg';
import Icon from './tangan.jpg';
import Keplr from './keplr.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer,FaSort,FaAngleDoubleRight,FaExchangeAlt } from 'react-icons/fa';
import axios from 'axios';
import ibclistJSON from './ibclist.json';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function App() {
const [categories, setCategories] = useState([]);
const [categoriesIris, setCategoriesIris] = useState([]);
const [categoriesCrescent, setCategoriesCrescent] = useState([]);
const [address, setAddress] = useState('');
const [amount, setAmount] = useState(0)

//  keplr
 async function handleClick(chain) {
  const chainId = chain ? chain : 'cosmoshub-1'
  await window.keplr.enable(chainId)
  const offlineSigner = window.getOfflineSigner(chainId);
  const accounts = await offlineSigner.getAccounts();
  setAddress(accounts[0].address)
 }
// akhir keplr

useEffect(() => {
  retrieveCategories();
  retrieveCategoriesCrescent();
  retrieveCategoriesIris();
},[]);

  const retrieveCategories = async () => {
    try{
      const { data } = await axios.get('http://localhost:5000/balances/osmo/')
      
      const mapData = data.balances.map((b) => {
        const denom = b.denom
        const getName = ibclistJSON.ics20.filter(i => i.denom === denom)[0]
        return {
          denom: getName ? getName.alias : 'Not Found',
          amount: b.amount
        }
      })

      setCategories(mapData)
    }catch(error){
      console.log(error)
    }
  }

  async function getAmount(value) {
    const { data } = await axios.get('http://localhost:5000/balances/osmo/')
    setAmount(value)
  }

    const retrieveCategoriesIris = async () => {
      try{
        const { data } = await axios.get('http://localhost:5000/balances/iris/')
        setCategoriesIris(data.result)
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
    
      const retrieveCategoriesCrescent = async () => {
        try{
          const { data } = await axios.get('http://localhost:5000/balances/crescent/')
          const mapDataCrescent = data.balances.map((b) => {
            const denom = b.denom
            const getName = ibclistJSON.ics20.filter(i => i.denom === denom)[0]
            return {
              denom: getName ? getName.alias : 'Not Found',
              amount: b.amount
            }
          })  
          setCategoriesCrescent(mapDataCrescent)
          console.log(data)
        }catch(error){
          console.log(error)
        }
      };

  return (
    <div className="App"> 
      <div className='container-fluid bg-black'>
        <div className='row '>
          <h3 className='text-white'><FaBeer /> Kewr</h3>
          <div className='col-6'>
          </div>
          <div className='col-6 text-end'>
          <Button onClick={handleClick} variant='outline-info' className='text-white' ><img src={Keplr} width='30'/> {address ? address : 'Connect Wallet'} </Button>
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
          <h4 className='text-white'></h4>
          </div>
        </div>
        <div className='row text-white text-center d-flex justify-content-center mt-5'>
          <div className='col-5'>
            <h4 className='border border-info'>Osmosis</h4>
            <ul>
              {categories.map((data,index) => (
                <p >- {data.denom} <br />{data.amount} </p>
              ))}
          </ul>
          </div>
          <div className='col-5'>
            <h4 className='border border-info'>Iris</h4>
            <ul>
              {categoriesIris.map((data,index) => (
                <p>- {data.denom}<br />{data.amount} </p>
              ))}
          </ul>
          </div>
        </div>
        <row className='text-white text-center d-flex justify-content-center mt-5'>
          <div className='col-6'>
            <h4 className='border border-info'>Crescent</h4>
            <ul>
              {categoriesCrescent.map((data,index) => (
                <p > - {data.denom}<br />{data.amount} </p>
              ))}
          </ul>
          </div>
        </row>

        {/* swap */}
        <div className='row text-white text-center mt-5 '>
          <div className='col-2'>
            
            <h4 className='mt-5'> <img src={Osmosis} className='rounded-circle' width='50' /> Osmosis</h4>
            <select className='mt-5 form-select bg-black text-info border border-info'>
              <option>Iris</option> 
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>

          <input type="number" onChange={(e) => getAmount(e.target.value)} placeholder="0" />
          <input type="number" value={amount} placeholder="0" />

          <div className='col-2'>
          <h4 className='mt-5'><img src={Iris} className='rounded-circle' width='50' /> Iris</h4>
          <select className='mt-5 form-select bg-black text-white border border-white' >
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-white border border-white'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-light'>Swap</Button>
          </div>
          <div className='col-2'>
          <h4 className='mt-5'><img src={Crescent} className='rounded-circle' width='50' /> Crescent</h4>
          <select className='mt-5 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4 className='mt-3'><FaSort/></h4>
            <select className='mt-3 form-select bg-black text-info border border-info'>
              <option>Iris</option>
              <option>Osmosis</option>
              <option>Gravity</option>
            </select>
            <h4></h4>
            <Button variant='outline-info'>Swap</Button>
          </div>
          <div className='col-6'>
          <img src={Logo} width="500"/>
          </div>
        </div>
        {/* akhir swap */}

        {/* IBC */}
        <div className='row mt-5'>
          <div className='col-6 text-white text-center'>
          <img src={Icon} width='400' />
          </div>
          <div className='col-6 text-white'>
            <div className='row mt-5'>
            <div className='col-12'>
            <DropdownButton id="dropdown-basic-button" title="IBC Relayer">
              <Dropdown.Item href="#/action-1">Osmosis -- CosmosHub</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Osmosis -- Gravity Bridge</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Osmosis -- Crescent</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Osmosis -- Iris</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Iris -- Gravity Bridge</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Iris -- Crescent</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Iris -- Osmosis</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Iris -- CosmosHub</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gravity Bridge -- Iris</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gravity Bridge -- Crescent</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gravity Bridge -- Osmosis</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Gravity Bridge -- Cosmos</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Crescent -- CosmosHub</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Crescent -- Osmosis</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Crescent -- Gravity Bridge</Dropdown.Item>
            </DropdownButton>
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
              <FaExchangeAlt size='40'/>
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
              <h4></h4>
              <Button variant='outline-info mt-4'>Submit</Button>
            </div>
          </div>
            </div>
        </div>
        {/* akhir IBC */}
      </div>
    </div>
  );
}

export default App;
