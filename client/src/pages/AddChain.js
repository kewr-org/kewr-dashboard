import React, { useState } from 'react';

function AddChainForm() {
  // Create a state variable to store the form data
  const [formData, setFormData] = useState({
    chainId: '',
    chainName: '',
    rpc: '',
    rest: '',
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: 'cosmos',
      bech32PrefixAccPub: 'cosmos' + 'pub',
      bech32PrefixValAddr: 'cosmos' + 'valoper',
      bech32PrefixValPub: 'cosmos' + 'valoperpub',
      bech32PrefixConsAddr: 'cosmos' + 'valcons',
      bech32PrefixConsPub: 'cosmos' + 'valconspub',
    },
    currencies: [
      { 
        coinDenom: 'ATOM', 
        coinMinimalDenom: "uatom", 
        coinDecimals: 6, 
        coinGeckoId: "cosmos", 
    },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
            low: 0.01,
            average: 0.025,
            high: 0.04,
        },
    },
    ],
    stakeCurrency: {
      coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
    },
  });

  // Create an event handler for the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the keplr.experimentalSuggestChain method with the form data
      await window.keplr.experimentalSuggestChain(formData);
    } catch (error) {
      console.error(error);
    }
  };

  // Create an event handler for changes to the form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      if (name === "coinType") {
        return {
          ...prevData,
          bip44: {
            ...prevData.bip44,
            coinType: Number(value),
          },
        };
      } else if (name === "prefix") {
        return {
          ...prevData,
          bech32Config: {
            ...prevData.bech32Config,
            bech32PrefixAccAddr: value,
            bech32PrefixAccPub: value + "pub",
            bech32PrefixValAddr: value + "valoper",
            bech32PrefixValPub: value + "valoperpub",
            bech32PrefixConsAddr: value + "valcons",
            bech32PrefixConsPub: value + "valconspub",
          },
        };
      } else if (name === "coinDenom") {
        return {
          ...prevData,
          currencies: [
            { 
              ...prevData.currencies[0],
              coinDenom: value,
            },
          ],
          feeCurrencies: [
            { 
              ...prevData.feeCurrencies[0],
              coinDenom: value,
            },
          ],
        }
      } else if (name === "coinMinimalDenom") {
        return {
          ...prevData,
          currencies: [
            { 
              ...prevData.currencies[0],
              coinMinimalDenom: value,
            },
          ],
          feeCurrencies: [
            { 
              ...prevData.feeCurrencies[0],
              coinMinimalDenom: value,
            },
          ],
        }
      } else if (name === "coinMinimalDenom") {
        return {
          ...prevData,
          currencies: [
            { 
              ...prevData.currencies[0],
              coinMinimalDenom: value,
            },
          ],
          feeCurrencies: [
            { 
              ...prevData.feeCurrencies[0],
              coinMinimalDenom: value,
            },
          ],
        }
      } else if (name === "coinMinimalDenom") {
        return {
          ...prevData,
          currencies: [
            { 
              ...prevData.currencies[0],
              coinMinimalDenom: value,
            },
          ],
          feeCurrencies: [
            { 
              ...prevData.feeCurrencies[0],
              coinMinimalDenom: value,
            },
          ],
        }
      } else if (name === "low") {
        // Update the low field of the gasPriceStep object
        return {
          ...prevData,
          feeCurrencies: [
            {
              ...prevData.feeCurrencies[0],
              gasPriceStep: {
                ...prevData.feeCurrencies[0].gasPriceStep,
                low: Number(value),
              },
            },
          ],
        };
      } else if (name === "average") {
        // Update the averagefield of the gasPriceStep object
        return {
          ...prevData,
          feeCurrencies: [
            {
              ...prevData.feeCurrencies[0],
              gasPriceStep: {
                ...prevData.feeCurrencies[0].gasPriceStep,
                average: Number(value),
              },
            },
          ],
        };
      } else if (name === "high") {
        // Update the high field of the gasPriceStep object
        return {
          ...prevData,
          feeCurrencies: [
            {
              ...prevData.feeCurrencies[0],
              gasPriceStep: {
                ...prevData.feeCurrencies[0].gasPriceStep,
                high: Number(value),
              },
            },
          ],
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };
  

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chainId">Chain ID:</label>
      <input
        type="text"
        name="chainId"
        id="chainId"
        value={formData.chainId}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="chainName">Chain Name:</label>
      <input
        type="text"
        name="chainName"
        id="chainName"
        value={formData.chainName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="rpc">RPC:</label>
      <input
        type="text"
        name="rpc"
        id="rpc"
        value={formData.rpc}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="rest">Rest:</label>
      <input
        type="text"
        name="rest"
        id="rest"
        value={formData.rest}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="coinType">Coin Type:</label>
      <select id="coinType" name="coinType" value={formData.coinType} onChange={handleChange}>
        <option value='118'>Cosmos</option>
        <option value="60">Ethereum</option>
      </select>
      <br />
      <label htmlFor="prefix">Prefix:</label>
      <input
        type="text"
        name="prefix"
        id="prefix"
        value={formData.prefix}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="coinDenom">Coin Denom:</label>
      <input
        type="text"
        name="coinDenom"
        id="coinDenom"
      value={formData.currencies[0].coinDenom}
      onChange={handleChange}
      />
      <br />
      <label htmlFor="coinMinimalDenom">Coin Minimal Denom:</label>
      <input
        type="text"
        name="coinMinimalDenom"
        id="coinMinimalDenom"
      value={formData.currencies[0].coinMinimalDenom}
      onChange={handleChange}
      />
      <br />
      <label htmlFor="coinMinimalDenom">Coin Minimal Denom:</label>
      <input
        type="number"
        name="coinDecimals"
        id="coinDecimals"
      value={formData.currencies[0].coinDecimals}
      onChange={handleChange}
      />
      <br />
      <label htmlFor="low">Gas Price Step (Low):</label>
  <input
    type="number"
    name="low"
    value={formData.feeCurrencies[0].gasPriceStep.low}
    onChange={handleChange}
  />
  <br />
  <label htmlFor="average">Gas Price Step (Average):</label>
  <input
    type="number"
    name="average"
    value={formData.feeCurrencies[0].gasPriceStep.average}
    onChange={handleChange}
  />
  <br />
  <label htmlFor="high">Gas Price Step (High):</label>
  <input
    type="number"
    name="high"
    value={formData.feeCurrencies[0].gasPriceStep.high}
    onChange={handleChange}
  />
  <br />
      <button type="submit">Add Chain</button>
    </form>
  );
}

export default AddChainForm;
