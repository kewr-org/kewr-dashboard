import React from 'react'

function AddAgoricDevnet() {
  const handleClick = () => {
    window.keplr.experimentalSuggestChain({
      "chainId": "agoricdev-16",
      "chainName": "agoric-devnet",
      "rpc": "http://139.59.8.130:26657",
      "rest": "https://devnet.api.agoric.net",
      "bip44": {
        "coinType": 60
      },
      "coinType": 60,
      "bech32Config": {
        "bech32PrefixAccAddr": "agoric",
        "bech32PrefixAccPub": "agoricpub",
        "bech32PrefixValAddr": "agoricvaloper",
        "bech32PrefixValPub": "agoricvaloperpub",
        "bech32PrefixConsAddr": "agoricvalcons",
        "bech32PrefixConsPub": "agoricvalconspub"
      },
      "currencies": [
        {
          "coinDenom": "BLD",
          "coinMinimalDenom": "ubld",
          "coinDecimals": 6,
          "coinGeckoId": "agoric"
        }
      ],
      "feeCurrencies": [
        {
          "coinDenom": "BLD",
          "coinMinimalDenom": "ubld",
          "coinDecimals": 6,
          "coinGeckoId": "agoric",
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
        "coinDenom": "BLD",
        "coinMinimalDenom": "ubld",
        "coinDecimals": 6,
        "coinGeckoId": "agoric"
      },
      "features": []
    });
  };
  return (
    <button className="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onClick={handleClick}>✚ | Agoric Testnet</button>
  )
}

export default AddAgoricDevnet