import React, { useState } from "react";
import BalanceCrescent from "./Balances/BalanceCrescent";
import BalanceDummy from "./Balances/BalanceDummy";
import BalanceOsmosis from "./Balances/BalanceOsmosis";
import PriceCheckIris from "./PriceCheck/PriceCheckIris";
import PriceCheckOsmo from "./PriceCheck/PriceCheckOsmo";

function PriceCheck() {
  const [AtomAmount, setAtomAmount] = useState(0);
  return (
    <div
      id="main"
      className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
    >
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Price Checker</h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-indigo-600">
                  <i className="fa fa-wallet fa-2x fa-inverse"></i>
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">ATOM</h2>

                <input
                className="w-9/12 text-center"
                  placeholder="Atom Amount"
                  onChange={(e) => setAtomAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <PriceCheckOsmo />
        <PriceCheckIris AtomAmount={AtomAmount} setAtomAmount={setAtomAmount}/>
        <BalanceDummy />
        <BalanceDummy />
        <BalanceDummy />
        <BalanceDummy />
      </div>
    </div>
  );
}

export default PriceCheck;
