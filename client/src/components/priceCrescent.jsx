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
    <div className='container text-center bg-black'>
      <h4 className='border border-info text-white'>Price Check Crescent</h4>
      <form onSubmit={addPrice}>
        <input onChange={handleChange} className="input-lg" placeholder='Atom'></input>
        <button type='submit' className='btn btn-outline-info'>Submt</button>
      </form>
      <div className='row mt-2'>
        <div className='col-4'>
        <h4 className='text-white'>BCRE : {hasilBcre}</h4>
        </div>
        <div className='col-4'>
        <h4 className='text-white'>GRAV : {hasilGrav}</h4>
        </div>
        <div className='col-4'>
        <h4 className='text-white'>USDC AXL : {hasilUsd}</h4>
        </div>
      </div>
    </div>
  )
}

export default Tesswap