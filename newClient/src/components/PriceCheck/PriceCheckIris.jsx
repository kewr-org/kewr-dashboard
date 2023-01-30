import React from "react";

function PriceCheckIris(props) {


  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full p-5 bg-pink-600">
              <i className="fas fa-users fa-2x fa-inverse"></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold uppercase text-gray-600">Coinswap</h2>
           <p className="font-bold text-3xl">
              IRIS : {props.AtomAmount}
              <span className="text-pink-500">
                <i className="fa fa-exchange-alt"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCheckIris;
