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

function App() {
const [categories, setCategories] = useState();
const [categoriesIris, setCategoriesIris] = useState();
const [categoriesCrescent, setCategoriesCrescent] = useState();
const [address, setAddress] = useState('');
const ibcListsOsmosis = [
  {
    "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    "alias": "ATOM (ATOM/Channel-0"
    },
    {
    "denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
    "alias": "EVMOS (EVMOS/Channel-204)"
    },
    {
    "denom": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
    "alias": "LUNC (terra-luna/Channel-72)"
    },
    {
    "denom": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
    "alias": "BOOT (BOSTROM/Channel-95"
    },
    {
    "denom": "ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9",
    "alias": "LUNA (Terra 2.0/Channel-251)"
    },
    {
    "denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
    "alias": "USDC (Axelar/channel-208)"
    },
    {
    "denom": "uosmo",
    "alias": "OSMO"
    }
];

 
//  keplr
 async function handleClick() {
  const chainId = "cosmoshub-1"
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
      setCategories(data.balances)
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

    const retrieveCategoriesIris = async () => {
      try{
        const { data } = await axios.get('http://localhost:5000/balances/iris/')
        setCategoriesIris(data.balances)
        console.log(data)
      }catch(error){
        console.log(error)
      }
    }
    
      const retrieveCategoriesCrescent = async () => {
        try{
          const { data } = await axios.get('http://localhost:5000/balances/crescent/')
          setCategoriesCrescent(data.balances)
          console.log(data)
        }catch(error){
          console.log(error)
        }
      }

  return (
    <div className="App"> 
      <div className='container-fluid bg-black'>
        <div className='row '>
          <h3 className='text-white'><FaBeer /> Kewr</h3>
          <div className='col-6'>
          </div>
          <div className='col-6 text-end'>
          <Button onClick={handleClick} variant='outline-info' className='text-white' ><img src={Keplr} width='30'/> {address ? address : 'Connect Wallet'}</Button>
          <h4 className='text-white'></h4>
          </div>
        </div>
        <div className='row text-white text-center mt-5'>
          <div className='col-4'>
            <h4 className='border border-info'>Osmosis</h4>
            <p>{JSON.stringify(categories)}</p>
            {/* {ibcListsOsmosis.map((ibcListsOsmosis,index) => (
              <ul>
                  <li>{ibcListsOsmosis.denom}</li>
                  <li>{ibcListsOsmosis.alias}</li>
              </ul>
            ))} */}
          </div>
          <div className='col-4'>
            <h4 className='border border-info'>Iris</h4>
            <p>{JSON.stringify(categoriesIris)}</p>
          </div>
          <div className='col-4'>
            <h4 className='border border-info'>Crescent</h4>
            <p>{JSON.stringify(categoriesCrescent)}</p>
          </div>
        </div>
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
        <div className='row mt-5'>
          <div className='col-6 text-white text-center'>
          <img src={Icon} width='400' />
          </div>
          <div className='col-6 text-white'>
            <div className='row mt-5'>
            <div className='col-5'>
            <select className='form-select bg-black text-info border border-info'>
              <option>Osmosis</option>
              <option>Gravity Bridge</option>
              <option>Iris</option>
              <option>Crescent</option>
            </select>
            </div>
            <div className='col-2 text-center'>
            <FaAngleDoubleRight size={40}/>
            </div>
            <div className='col-5'>
            <select className='form-select bg-black text-info border border-info'>
              <option>Osmosis</option>
              <option>Gravity Bridge</option>
              <option>Iris</option>
              <option>Crescent</option>
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
      </div>
    </div>
  );
}

export default App;
