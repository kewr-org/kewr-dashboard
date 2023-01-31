import React,{useEffect, useState} from "react";
import axios from 'axios'


function PriceCheckCrescent({onDataBcre,onDataGrav,onDataUsd,onHasilBcre,onHasilGrav,onHasilUsd}) {

  const [dataBcre, setDataBcre] = useState()
  const [dataGrav, setDataGrav] = useState()
  const [dataUsd, setDataUsd] = useState()
  const urlBcre = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/3"
  const urlGrav = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/10"
  const urlUsd = "https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/19"

  useEffect(() => {
    axios.get(urlBcre)
    .then(response => {
      console.log("iki BCRE",response.data.pool.price)
      setDataBcre(response.data.pool.price)
      if(onDataBcre){
        onDataBcre(response.data.pool.price)
      }
    })
    .catch(error => {
      console.log(error)
    })
    axios.get(urlGrav)
    .then(response => {
      console.log("iki GRAV",response.data.pool.price)
      if(onDataGrav){
        onDataGrav(response.data.pool.price)
      }
      setDataGrav(response.data.pool.price)
    })
    .catch(error => {
      console.log(error)
    })
    axios.get(urlUsd)
    .then(response => {
      console.log("iki USDC",response.data.pool.price)
      if(onDataUsd){
        onDataUsd(response.data.pool.price)
      }
      setDataUsd(response.data.pool.price)
    })
    .catch(error => {
      console.log(error)
    })
  })
  return <div className="w-full md:w-1/2 xl:w-1/3 p-6">
  <div className="bg-gray border border-yellow-400 rounded-lg shadow-xl p-5">
    <div className="flex flex-row items-center">
      <div className="flex-1 text-right md:text-center">
        <h1 className="font-bold uppercase text-yellow-400 mb-3">- Crescent -</h1>
        <p className="font-bold text-1xl text-yellow-400">
          BCRE : {onHasilBcre}
        </p>
        <p className="font-bold text-1xl text-yellow-400">
          GRAV : {onHasilGrav}
        </p>
        <p className="font-bold text-1xl text-yellow-400">
          USDC : {onHasilUsd}
        </p>
      </div>
    </div>
  </div>
</div>
}

export default PriceCheckCrescent;
