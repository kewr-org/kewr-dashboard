import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Tesswap() {
    const [data, setData] = useState([])
    const [kali, setKali] = useState()
    const [hasil, setHasil] = useState()
    const urlbcre = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/3"
    const urlgweth = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/10" 
    const urlUsd = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/19"   


    useEffect(() => {
        axios.get(urlUsd)
          .then(response => {
            setData(response.data.pool.price);
            console.log(data)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      const handleChange = (e) => {
        console.log("tes input")
        setKali(e.target.value)
        if(data !== null && data !==undefined){
            setHasil(kali * data )
        }
      }

      const handleSwap = () => {
        console.log("kirim swap")
      }

  return (
    <div>
        <h1 className='text-white'>Swap</h1>
        <input type="number" onChange={handleChange} value={kali} placeholder="ATOM"></input>
        <h3 className='text-white'>bCre : {hasil}</h3>
        <button className='btn btn-primary' onClick={handleSwap}>SWAP</button>
    </div>
  )
}

export default Tesswap