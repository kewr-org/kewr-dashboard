import React from 'react'

function AddNyx() {
  const handleClick = () => {
    window.keplr.experimentalSuggestChain({
      "chainId": "nyx",
      "chainName": "nyx",
      "rpc": "https://rpc.nyx.nodes.guru",
      "rest": "https://api.nyx.nodes.guru",
      "bip44": {
        "coinType": 118
      },
      "coinType": 118,
      "bech32Config": {
        "bech32PrefixAccAddr": "n",
        "bech32PrefixAccPub": "npub",
        "bech32PrefixValAddr": "nvaloper",
        "bech32PrefixValPub": "nvaloperpub",
        "bech32PrefixConsAddr": "nvalcons",
        "bech32PrefixConsPub": "nvalconspub"
      },
      "currencies": [
        {
          "coinDenom": "NYM",
          "coinMinimalDenom": "unym",
          "coinDecimals": 6,
          "coinGeckoId": "nym"
        }
      ],
      "feeCurrencies": [
        {
          "coinDenom": "NYM",
          "coinMinimalDenom": "unym",
          "coinDecimals": 6,
          "coinGeckoId": "nym",
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
        "coinDenom": "NYM",
        "coinMinimalDenom": "unym",
        "coinDecimals": 6,
        "coinGeckoId": "nym"
      },
      "features": []
    });
  };

  
  return (
    <button className="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onSubmit={handleClick}>✚ | Nyx</button>
  )
}

export default AddNyx