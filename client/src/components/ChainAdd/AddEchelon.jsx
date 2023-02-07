import React from 'react'

function AddEchelon() {
  const handleClick = () => {
    window.keplr.experimentalSuggestChain({
      "chainId": "echelon_3000-3",
      "chainName": "echelon",
      "rpc": "https://tendermint.ech.network",
      "rest": "https://api.ech.network",
      "bip44": {
        "coinType": 60
      },
      "coinType": 60,
      "bech32Config": {
        "bech32PrefixAccAddr": "echelon",
        "bech32PrefixAccPub": "echelonpub",
        "bech32PrefixValAddr": "echelonvaloper",
        "bech32PrefixValPub": "echelonvaloperpub",
        "bech32PrefixConsAddr": "echelonvalcons",
        "bech32PrefixConsPub": "echelonvalconspub"
      },
      "currencies": [
        {
          "coinDenom": "ECH",
          "coinMinimalDenom": "aechelon",
          "coinDecimals": 18,
          "coinGeckoId": "echelon"
        }
      ],
      "feeCurrencies": [
        {
          "coinDenom": "ECH",
          "coinMinimalDenom": "aechelon",
          "coinDecimals": 18,
          "coinGeckoId": "echelon",
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
        "coinDenom": "ECH",
        "coinMinimalDenom": "aechelon",
        "coinDecimals": 18,
        "coinGeckoId": "echelon"
      },
      "features": [
        "ibc-transfer",
        "ibc-go",
        "eth-address-gen",
        "eth-key-sign"
      ]
    });
  };
  
  return (
    <button className="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onSubmit={handleClick}>✚ | Echelon </button>
  )
}

export default AddEchelon