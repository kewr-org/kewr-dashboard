import React from "react";
import LogoCrescent from "../../assets/crescent.svg"

function BalanceCrescent() {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-grey border border-cyan-300 border-b-4 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
          <div className="rounded-full bg-black">
              <img src={LogoCrescent} width="70"/>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-white">Crescent</h2>
            <p className="font-bold text-3xl text-white">Tes123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCrescent;
