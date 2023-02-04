import React, { useState,useEffect } from "react";
import LogoIris from "../../assets/irisnet.svg";
import { checkIbcListReturnAlias } from "../../utils";

function BalanceIris() {

  const [AllBalancesIris, setAllBalancesIris] = useState()
  const ibcListIris = [
    {
      "denom" : "uiris",
      "alias" : "IRIS"
    }
  ]
  

  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "irishub-1";
      async function getAddress() {
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const Address = accounts[0].address;
        const client = await SigningStargateClient.connectWithSigner(
          "https://cosmoshub-rpc.stakely.io",
          offlineSigner
        );
      await client.getAllBalances(Address)
      .then(data => {
      setAllBalancesIris(data);
      console.log(data);
  });
      
      }

      getAddress();
    }
  }, []);

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
      <div className="bg-grey border border-cyan-300 border-b-4 rounded-lg shadow-xl p-5">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className="rounded-full bg-black">
              <img src={LogoIris} width="70"/>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h2 className="font-bold text-white">IRIS NET</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceIris;
