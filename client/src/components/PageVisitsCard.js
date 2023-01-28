import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Crescent from './priceCheckCrescent'
import Osmosis from './priceCheckOsmosis'
import Iris from './priceCheckIris'
import Canto from './priceCheckCanto'

export default function PageVisitsCard() {
//  crescent
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

// osmo
    const [dataOsmo, setDataOsmo] = useState()
    const [dataOsmoGrav, setDataOsmoGrav] = useState()
    const [DataOsmoIris, setDataOsmoIris] = useState()
    const [hasilOsmo, setHasilOsmo] = useState()
    const [hasilOsmoGrav, setHasilOsmoGrav] = useState()
    const [hasilOsmoIris, setHasilOsmoIris] = useState()
    const urlOsmo = "https://osmosis-api.polkachu.com/osmosis/gamm/v1beta1/pools/1/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    const urlOsmoGrav = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/625/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2FE97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44"
    const urlOsmoIris = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/7/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0"

    // iris
    const urlIrisIris = "https://lcd-iris.keplr.app/irismod/coinswap/pools/lpt-3"
    const urlIrisGrav = "https://lcd-iris.keplr.app/irismod/coinswap/pools/lpt-6"
    const urlIrisUsdc = "https://lcd-iris.keplr.app/irismod/coinswap/pools/lpt-4"
    // Atom -> Iris
    const [dataIris, setDataIris] = useState()
    const [hasilAtomIris, setHasilAtomIris] = useState()
    const [dataIrisIbc, setDataIrisIbc] = useState()
    // Atom -> Grav
    const [dataLpt6Uiris, setDataLpt6Uiris] = useState()
    const [dataLpt6Grav, setDataLpt6Grav] = useState()
    const [hasilCoinswapAtomGrav, setHasilCoinswapAtomGrav] = useState()
    //  Atom -> USDC
    const [dataLpt4Uiris, setDataLpt4Uiris] = useState()
    const [dataLpt4Usdc, setDataLpt4Usdc] = useState()
    const [hasilCoinswapAtomUsdc, setHasilCoinswapAtomUsdc] = useState()

    //  CANTO
    const [dataCanto, setDataCanto] = useState()
    

useEffect(() => {
    // Canto
    fetch("https://slingshot.finance/api/v3/trade/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "liquidityzone": "canto"
    },
    body: JSON.stringify({
        fromAmount: isiInput,
        from: "0xeceeefcee421d8062ef8d6b4d814efe4dc898265",
        gasOptimized: false,
        limit: "99",
        threeHop: true,
        to: "0x5fd55a1b9fc24967c4db09c513c3ba0dfa7ff687",
        _unsafe: false
    })
})
.then(response => response.json())
.then(data => setDataCanto(data.estimatedOutput))
.catch(error => console.error(error));


    // crescent
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

//   osmosis
  axios.get(urlOsmo)
        .then(response => {
            setDataOsmo(response.data.spot_price)
        })
        .catch(error => {
            console.log("Error dari urlCre :",error)
        });
        axios.get(urlOsmoGrav)
        .then(response => {
            setDataOsmoGrav(response.data.spot_price)
        })
        .catch(error => {
            console.log(error)
        })
        axios.get(urlOsmoIris)
        .then(response => {
            setDataOsmoIris(response.data.spot_price)
        })
        .catch(error => {
            console.log(error)
        })

        // iris
        axios.get(urlIrisIris)
        .then(response => {
            
            setDataIris(response.data.pool.standard.amount)
            setDataIrisIbc(response.data.pool.token.amount)
        })
        .catch(error => {
            console.log(error)
        })
        axios.get(urlIrisGrav)
        .then(response => {
            setDataLpt6Uiris(response.data.pool.standard.amount)
            setDataLpt6Grav(response.data.pool.token.amount)
        })
        .catch(error => {
            console.log(error)
        })
        axios.get(urlIrisUsdc)
        .then(response => {
            setDataLpt4Uiris(response.data.pool.standard.amount)
            setDataLpt4Usdc(response.data.pool.token.amount)
        })
        .catch(error => {
            console.log(error)
        })
})

// Canto


const addPrice = (event) => {
  console.log(dataBcre)
  event.preventDefault()
  setHasilBcre(dataBcre * isiInput)
  setHasilGrav(isiInput * dataBcre / dataGrav)
  setHasilUsd(isiInput * dataUsd)
  setHasilOsmo(dataOsmo * isiInput)
  setHasilOsmoGrav(dataOsmo * isiInput / dataOsmoGrav)
  setHasilOsmoIris(dataOsmo * isiInput / DataOsmoIris)
  setHasilAtomIris(isiInput * dataIris / dataIrisIbc )
  setHasilCoinswapAtomGrav(isiInput * dataIris / dataIrisIbc * dataLpt6Grav / dataLpt6Uiris )
  setHasilCoinswapAtomUsdc(isiInput *dataIris / dataIrisIbc * dataLpt4Usdc / dataLpt4Uiris)
  
}

const handleChange = (event) => {
  setIsiIInput(event.target.value)
  setHasilBcre("")
  setHasilGrav("")
  setHasilUsd("")
  setHasilOsmo("")
  setHasilOsmoGrav("")
  setHasilOsmoIris("")
  setHasilAtomIris("")
  setHasilCoinswapAtomGrav("")
  setHasilCoinswapAtomUsdc("")

}

    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Price Check</h2>
                    <form onSubmit={addPrice}>
                    <input
      type="number"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleNumber0"
      placeholder="Atom"
      onChange={handleChange}
    />
                    </form>
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    No
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Dex
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Coin
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Coin
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Coin {dataCanto}
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <Osmosis hasilOsmo={hasilOsmo} hasilOsmoGrav={hasilOsmoGrav} hasilOsmoIris={hasilOsmoIris}/>
                            <Crescent hasilBcre={hasilBcre} hasilGrav={hasilGrav} hasilUsd={hasilUsd}/>
                            <Iris hasilAtomIris={hasilAtomIris} hasilAtomGrav={hasilCoinswapAtomGrav} hasilAtomUsdc={hasilCoinswapAtomUsdc}/>
                            <Canto  />
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
