import React from 'react'

function AddPointNetwork() {
  const handleClick = () => {
    window.keplr.experimentalSuggestChain({
      "chainId": "point_10687-1",
      "chainName": "point",
      "rpc": "https://rpc-mainnet-1.point.space:26657",
      "rest": "https://rpc-mainnet-1.point.space:1317",
      "bip44": {
        "coinType": 60
      },
      "coinType": 60,
      "bech32Config": {
        "bech32PrefixAccAddr": "point",
        "bech32PrefixAccPub": "pointpub",
        "bech32PrefixValAddr": "pointvaloper",
        "bech32PrefixValPub": "pointvaloperpub",
        "bech32PrefixConsAddr": "pointvalcons",
        "bech32PrefixConsPub": "pointvalconspub"
      },
      "currencies": [
        {
          "coinDenom": "POINT",
          "coinMinimalDenom": "apoint",
          "coinDecimals": 18,
          "coinGeckoId": "point-network"
        }
      ],
      "feeCurrencies": [
        {
          "coinDenom": "POINT",
          "coinMinimalDenom": "apoint",
          "coinDecimals": 18,
          "coinGeckoId": "point-network",
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
        "coinDenom": "POINT",
        "coinMinimalDenom": "apoint",
        "coinDecimals": 18,
        "coinGeckoId": "point-network"
      },
      "features": [
        "ibc-transfer",
        "ibc-go",
        "eth-address-gen",
        "eth-key-sign"
      ]
    }

    )}
  return (
    <button className="bg-teal-200 hover:bg-teal-400 text-gray-800 font-semibold py-2 px-4 border  rounded shadow" onClick={handleClick}>✚ | Point Network </button>
  )
}

export default AddPointNetwork