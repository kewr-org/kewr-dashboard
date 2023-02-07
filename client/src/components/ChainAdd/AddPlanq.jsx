import React from 'react'


function AddPlanq() {
    const handleClick = () => {
      window.keplr.experimentalSuggestChain({
        "chainId": "planq_7070-2",
        "chainName": "planq",
        "rpc": "https://rpc.planq.network",
        "rest": "https://rest.planq.network",
        "bip44": {
          "coinType": 60
        },
        "coinType": 60,
        "bech32Config": {
          "bech32PrefixAccAddr": "plq",
          "bech32PrefixAccPub": "plqpub",
          "bech32PrefixValAddr": "plqvaloper",
          "bech32PrefixValPub": "plqvaloperpub",
          "bech32PrefixConsAddr": "plqvalcons",
          "bech32PrefixConsPub": "plqvalconspub"
        },
        "currencies": [
          {
            "coinDenom": "planq",
            "coinMinimalDenom": "aplanq",
            "coinDecimals": 18,
            "coinGeckoId": "unknown"
          }
        ],
        "feeCurrencies": [
          {
            "coinDenom": "planq",
            "coinMinimalDenom": "aplanq",
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
          "coinDenom": "planq",
          "coinMinimalDenom": "aplanq",
          "coinDecimals": 18,
          "coinGeckoId": "unknown"
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
        <button class="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onClick={handleClick}>✚ | Planq Network </button>
      );
  }

  

export default AddPlanq

