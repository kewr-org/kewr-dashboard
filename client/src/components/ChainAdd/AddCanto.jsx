import React from 'react'
import LogoCanto from '../../assets/canto.png'

function AddCanto() {

  const handleClick = () => {
    console.log("button add Canto")
    window.keplr.experimentalSuggestChain({
      "chainId": "canto_7700-1",
      "chainName": "canto",
      "rpc": "https://canto-rpc.polkachu.com:443",
      "rest": "https://canto-api.polkachu.com",
      "bip44": {
        "coinType": 60
      },
      "coinType": 60,
      "bech32Config": {
        "bech32PrefixAccAddr": "canto",
        "bech32PrefixAccPub": "cantopub",
        "bech32PrefixValAddr": "cantovaloper",
        "bech32PrefixValPub": "cantovaloperpub",
        "bech32PrefixConsAddr": "cantovalcons",
        "bech32PrefixConsPub": "cantovalconspub"
      },
      "currencies": [
        {
          "coinDenom": "CANTO",
          "coinMinimalDenom": "acanto",
          "coinDecimals": 18,
          "coinGeckoId": "unknown"
        }
      ],
      "feeCurrencies": [
        {
          "coinDenom": "CANTO",
          "coinMinimalDenom": "acanto",
          "coinDecimals": 18,
          "coinGeckoId": "unknown",
          "gasPriceStep": {
            "low": 0.01,
            "average": 0.025,
            "high": 0.03
          }
        }
      ],
      "gasPriceStep": {
        "low": 0.01,
        "average": 0.025,
        "high": 0.03
      },
      "stakeCurrency": {
        "coinDenom": "CANTO",
        "coinMinimalDenom": "acanto",
        "coinDecimals": 18,
        "coinGeckoId": "unknown"
      },
      "features": [
        "ibc-transfer",
		    "ibc-go",
		    "eth-address-gen",
		    "eth-key-sign",
      ]
    });
  }

  return (

    <button className="bg-gray-800 hover:bg-cyan-400 text-cyan-400 hover:text-white font-semibold py-2 px-4 border rounded shadow"
    onClick={handleClick}>✚ | Canto </button>

  )
}

export default AddCanto