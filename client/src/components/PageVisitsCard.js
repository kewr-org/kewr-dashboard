import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function PageVisitsCard() {
//  crescent
    const [dataBcre, setDataBcre] = useState()
const [dataGrav, setDataGrav] = useState()
const [dataUsd, setDataUsd] = useState()
const [DataOsmoIris, setDataOsmoIris] = useState()
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
    const [hasilOsmo, setHasilOsmo] = useState()
    const [hasilOsmoGrav, setHasilOsmoGrav] = useState()
    const urlOsmo = "https://osmosis-api.polkachu.com/osmosis/gamm/v1beta1/pools/1/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    const urlOsmoGrav = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/625/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2FE97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44"
    const urlOsmoIris = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/7/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0"


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
  axios.get(urlOsmo)
        .then(response => {
            console.log("Osmo" , response.data.spot_price)
            setDataOsmo(response.data.spot_price)
        })
        .catch(error => {
            console.log("Error dari urlCre :",error)
        });
        axios.get(urlOsmoGrav)
        .then(response => {
            console.log("osmo-grav", response.data.spot_price)
            setDataOsmoGrav(response.data.spot_price)
        })
        .catch(error => {
            console.log(error)
        })
        axios.get(urlOsmoIris)
        .then(response => {
            console.log("osmo-iris", response.data.spot_price)
            setDataOsmoIris(response.data.spot_price)
            console.log(response.data.spot_price);
        })
        .catch(error => {
            console.log(error)
        })
})

const addPrice = (event) => {
  console.log(dataBcre)
  event.preventDefault()
  setHasilBcre(dataBcre * isiInput)
  setHasilGrav(isiInput * dataBcre / dataGrav)
  setHasilUsd(isiInput * dataUsd)
  setHasilOsmo(dataOsmo * isiInput)
  setHasilOsmoGrav(dataOsmo * isiInput / dataOsmoGrav)
}

const handleChange = (event) => {
  setIsiIInput(event.target.value)
  setHasilBcre("")
  setHasilGrav("")
  setHasilUsd("")
  setHasilOsmo("")
  setHasilOsmoGrav("")
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
                                    Coin
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    1
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                frontier.osmosis.zone
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    OSMO : {hasilOsmo}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    GRAV : {hasilOsmoGrav}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    IRIS : 
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    2
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                app.crescent.network
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    BCRE : {hasilBcre}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    GRAV : {hasilGrav}
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    USDC AXL : {hasilUsd}
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    3
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                coinswap.market
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    tes123
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    tes123
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    tes123
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    4
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                app.diffusion.fi
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    tes123
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    tes123
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    tes123
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
