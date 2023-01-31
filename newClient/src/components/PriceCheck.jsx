import React, { useState,useEffect } from "react";
import BalanceCrescent from "./Balances/BalanceCrescent";
import BalanceDummy from "./Balances/BalanceDummy";
import BalanceOsmosis from "./Balances/BalanceOsmosis";
import PriceCheckCrescent from "./PriceCheck/PriceCheckCrescent";
import PriceCheckIris from "./PriceCheck/PriceCheckIris";
import PriceCheckOsmo from "./PriceCheck/PriceCheckOsmo";

function PriceCheck() {

  const [isiInput, setIsiInput] = useState()
  const [dataBcre, setDataBcre] = useState()
  const [dataGrav, setDataGrav] = useState()
  const [dataUsd, setDataUsd] = useState()
  const [hasilBcre, setHasilBcre] = useState()
  const [hasilGrav, setHasilGrav] = useState()
  const [hasilUsd, setHasilUsd] = useState()

  const handleDataBcre = value => {
    setDataBcre(value)
  }

  const handleDataGrav = value => {
    setDataGrav(value)
  }

  const handleDataUsd = value => {
    setDataUsd(value)
  }

  const addPrice = (event) => {
    event.preventDefault()
    setHasilBcre(dataBcre * isiInput)
    setHasilGrav(isiInput * dataBcre / dataGrav)
    setHasilUsd(isiInput * dataUsd)
  }

  const handleChange = (event) => {
    setIsiInput(event.target.value)
    setHasilBcre("")
    setHasilGrav("")
    setHasilUsd("")
  }

  return (
    <div
      id="main"
      className="main-content flex-1 bg-gray mt-12 md:mt-2 pb-24 md:pb-5"
    >
      <div className="bg-gray-800 pt-3">
        <div className=" flex flex-wrap justify-between rounded-tl-3xl border border-white p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Price Checker</h1>
          <form onSubmit={addPrice} >
            <input onChange={handleChange}  placeholder="Atom Amount..." className="bg-gray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 "></input>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap">
        <PriceCheckOsmo />
        <PriceCheckCrescent onDataBcre={handleDataBcre} onDataGrav={handleDataGrav} onDataUsd={handleDataUsd} onHasilBcre={hasilBcre} onHasilGrav={hasilGrav} onHasilUsd={hasilUsd}/>
        <PriceCheckIris />
        <BalanceDummy />
        <BalanceDummy />
        <BalanceDummy />
        <BalanceDummy />
      </div>
    </div>
  );
}

export default PriceCheck;
