import React from "react";
import BalanceCrescent from "./Balances/BalanceCrescent";
import BalanceDummy from "./Balances/BalanceDummy";
import BalanceIris from "./Balances/BalanceIris";
import BalanceOsmosis from "./Balances/BalanceOsmosis";

function Balances() {
  return (
    <div
      id="main"
      className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
    >
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Balances</h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        <BalanceOsmosis />
        <BalanceIris />
        <BalanceCrescent />
        <BalanceDummy />
        <BalanceDummy />
        <BalanceDummy />
        <BalanceDummy />
      </div>
    </div>
  );
}

export default Balances;
