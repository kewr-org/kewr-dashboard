import React,{useState,useEffect} from 'react'
import axios from 'axios'

function PriceOsmo() {

    const [dataOsmo, setDataOsmo] = useState()
    const [dataOsmoGrav, setDataOsmoGrav] = useState()
    const [isiInput, setIsiInput] = useState()
    const [hasilOsmo, setHasilOsmo] = useState()
    const [hasilOsmoGrav, setHasilOsmoGrav] = useState()
    const urlOsmo = "https://osmosis-api.polkachu.com/osmosis/gamm/v1beta1/pools/1/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
    const urlOsmoGrav = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/625/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2FE97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44"
    const urlOsmoIris = "https://api.osl.zone/osmosis/gamm/v1beta1/pools/7/prices?base_asset_denom=uosmo&quote_asset_denom=ibc%2F7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0"

    useEffect(() => {
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
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        setHasilOsmo(dataOsmo * isiInput)
        setHasilOsmoGrav(dataOsmo * isiInput / dataOsmoGrav)
    }


    const handleChange = (event) => {
        setIsiInput(event.target.value)
        setHasilOsmo("")
        setHasilOsmoGrav("")
    }

  return (
    <div className='grid  mt-5 text-white text-center'>
        <h4 className='border border-info'>Price Check Osmosis</h4>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}  placeholder="Atom" className='text-black'></input>
            <button className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">Submit</button>
        </form>
        <div className='row mt-4'>
            <div className='col-4'>
                <h4>OSMO : {hasilOsmo} </h4>
            </div>
            <div className='col-4'>
                <h4>GRAV : {hasilOsmoGrav}</h4>
            </div>
            <div className='col-4'>
                <h4>IRIS : </h4>
            </div>
        </div>
    </div>
  )
}

export default PriceOsmo