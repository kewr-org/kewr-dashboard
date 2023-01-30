import React, { useState } from "react";
import IrisCheck from './PriceCheckIris';

function AtomInput() {
  const [AtomAmount, setAtomAmount] = useState(0);

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
          <IrisCheck AtomAmount={AtomAmount}/>
            <h2 className="font-bold uppercase text-gray-600">ATOM</h2>

            <input
              placeholder="Atom Amount"
              onChange={(e) => setAtomAmount(e.target.value)}
            />
          </div>
          {AtomAmount}
        </div>
      </div>
    </div>
  );
}

export default AtomInput;
