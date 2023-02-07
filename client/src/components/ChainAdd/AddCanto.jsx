import React from 'react'

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
      "features": []
    });
  }

  return (

    <button className="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onClick={handleClick}>✚ | Canto </button>

  )
}

export default AddCanto