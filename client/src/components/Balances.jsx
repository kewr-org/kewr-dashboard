import React from "react";
import BalanceCrescent from "./Balances/BalanceCrescent";
import BalanceBoot from "./Balances/BalanceBostrom";
import BalanceIris from "./Balances/BalanceIris";
import BalanceOsmosis from "./Balances/BalanceOsmosis";
import BalanceCosmos from "./Balances/BalanceCosmos";
import BalanceCanto from "./Balances/BalanceCanto";
import BalanceEvmos from "./Balances/BalanceEvmos";
import { WalletContext } from "../utils/keplr";
import { useContext } from "react";

function Balances(props) {

  const {walletId} = useContext(WalletContext)

  return (
    <div
      id="main"
      className="main-content flex-1 bg-gray-800 mt-12 md:mt-2 pb-24 md:pb-5"
    >
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-grey border border-cyan-400 p-4 shadow text-2xl text-white">
          <h1 className="font-bold pl-2">Balances</h1>
          
        </div>
      </div>
      <div className="flex flex-wrap bg-gray-800">
       { walletId ?  (
        <>
          <BalanceCosmos />
          <BalanceOsmosis />
          <BalanceIris />
          <BalanceCrescent />
          <BalanceCanto />
          <BalanceBoot />
          <BalanceEvmos />
        </>
       ) : (
        <h1 className="mx-auto mt-4 text-white text-bold text-6xl">Please Connect Wallet</h1>
       )}
      </div>
    </div>
  );
}

export default Balances;
