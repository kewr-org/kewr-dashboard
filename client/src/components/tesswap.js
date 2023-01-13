import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Tesswap() {
const [dataBcre, setDataBcre] = useState()
const [dataGrav, setDataGrav] = useState()
const [dataUsd, setDataUsd] = useState()
const [isiInput, setIsiIInput] = useState()
const [hasilBcre, setHasilBcre] = useState()
const [hasilGrav, setHasilGrav] = useState()
const [hasilUsd, setHasilUsd] = useState()
const urlBcre = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/3"
const urlGrav = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/10"
const urlUsd = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/19"
const urlOsmoAtom = "https://osmosis-api.polkachu.com/osmosis/gamm/v1beta1/pools/1/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"

useEffect(() => {
  axios.get(urlBcre)
  .then(response => {
      setDataBcre(response.data.pool.price)
  })
  .catch(error => {
      console.log("Error dari urlCre :",error)
  });

axios.get(urlGrav)
  .then(response => {
      setDataGrav(response.data.pool.price)
      console.log(dataGrav)
  })
  .catch(error => {
      console.log("Error dari urlGrav :",error)
  });

axios.get(urlUsd)
  .then(response => {
      setDataUsd(response.data.pool.price)
  })
  .catch(error => {
      console.log("Error dari urlUsd :",error)
  });
})


const addPrice = (event) => {
  console.log(dataBcre)
  event.preventDefault()
  setHasilBcre(dataBcre * isiInput)
  setHasilGrav(isiInput * dataBcre / dataGrav)
  setHasilUsd(isiInput * dataUsd)
  console.log(hasilGrav)
}

const handleChange = (event) => {
  setIsiIInput(event.target.value)
  setHasilBcre("")
  setHasilGrav("")
  setHasilUsd("")
}

  return (
    <div className='text-white'>
      <h1>Price Check Crescent</h1>
      <form onSubmit={addPrice}>
        <input onChange={handleChange}></input>
        <button type='submit' className='btn btn-primary'>Click Check Price</button>
      </form>
      <h1>BCRE : {hasilBcre}</h1>
      <h1>GRAV : {hasilGrav}</h1>
      <h1>USDC AXL : {hasilUsd}</h1>
    </div>
  )
}

export default Tesswap