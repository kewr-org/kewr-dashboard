import React, {useState, useEffect} from "react";
import LogoAtom from '../../assets/cosmos.svg';
import { SigningStargateClient } from "@cosmjs/stargate";

const BalanceCosmos = () => {
  const [AllBalances, setAllBalances] = useState([])
  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "cosmoshub-4";
      async function getAddress() {
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const Address = accounts[0].address;
        const client = await SigningStargateClient.connectWithSigner(
          "https://rpc-cosmoshub.blockapsis.com",
          offlineSigner
        );
      let allBalances;
      await client.getAllBalances(Address)
      .then(data => {
      allBalances = data;
      setAllBalances(data);
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
            <div className="rounded-full  bg-black">
              <img src={LogoAtom} width="70" className="rounded-full" />
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
          <div></div>
            <h2 className="font-bold text-white">COSMOS SU</h2>
            <p className="font-bold text-3xl text-white">tes123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCosmos;
