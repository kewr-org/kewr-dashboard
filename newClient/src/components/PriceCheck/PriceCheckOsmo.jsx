import React from "react";
import LogoOsmo from '../../assets/osmosis.svg'

function PriceCheckOsmo() {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full p-5 bg-indigo-600">
              <i className="fa fa-wallet fa-2x fa-inverse"></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">Osmosis Zone</h2>

            <p className="font-bold text-3xl">
              
              <span className="text-green-500">
                <i className="fas fa-caret-up"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCheckOsmo;
