import React,{useState,useEffect} from 'react'
import LogoCanto from "../../assets/canto.png"

function BalanceCanto() {

    const [AllBalancesCanto, setAllBalancesCanto] = useState()
  const ibcListCanto = [
    {
      "denom" : "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
      "alias" : "OSMOSIS (OSMO/Channel-141)"
    },
    {
      "denom" : "ibc/E55D3D529D45DB5A1955ACE20F6B36BDB8D35BD0BB1FA8FB93AEB8AC17E21561",
      "alias" : "ATOM (BOSTROM/Channel-341)"
    },
    {
      "denom" : "uatom",
      "alias" : "ATOM"
    }
  ];

  useEffect(() => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "canto_7700-1";
      async function getAddress() {
        await window.keplr.enable(chainId);
        const offlineSigner = window.keplr.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();
        const Address = accounts[0].address;
        const client = await SigningStargateClient.connectWithSigner(
          " https://rpc.cosmos.directory/canto",
          offlineSigner
        );
      await client.getAllBalances(Address)
      .then(data => {
      setAllBalancesCanto(data);
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
          <div className="flex-1 text-right md:text-center">
            <img src={LogoCanto} width="80" className="mx-auto mb-3"/>
            <ul>
      {AllBalancesCanto && AllBalancesCanto.map(wallet => (
        <li className="text-white" key={wallet.denom & wallet.amount}>
          - {checkIbcListReturnAlias(wallet.denom, ibcListCanto)}: {wallet.amount}
        </li>
      ))}
    </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceCanto