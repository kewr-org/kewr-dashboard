import React, { useState, useEffect } from 'react';

function PriceCheckCrescent({url1, url2, url3}) {
  const [data, setData] = useState({bCreData:null, GravData:null, AxlUsdtData:null});
  const [AtomAmount, setAtomAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {pool: {price: bCreData}} = await (await fetch("https://mainnet.crescent.network:1317/crescent/liquidity/v1beta1/pools/3")).json();
        const {pool: {price: GravData}} = await (await fetch(url2)).json();
        const {pool: {price: AxlUsdtData}} = await (await fetch(url3)).json();
        setData({ bCreData, GravData, AxlUsdtData });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url1, url2, url3]);

  const handleChange = event => {
    setAtomAmount(event.target.value);
  };

  const calculate = (data) => {
    console.log(calculate)
    return data * AtomAmount;
  }

  return (
    <div>
      <form>
        <label>
          ATOM :
          <input value={AtomAmount} onChange={handleChange} />
        </label>
      </form>
      <div>
        {data.bCreData ? (
          <p>bCre : {calculate(data.pool.price)}</p>
        ) : (
          <p></p>
        )}
        {data.GravData ? (
          <p>Grav : {calculate(data.bCreData) / data.GravData}</p>
        ) : (
          <p>Loading...</p>
        )}
        {data.AxlUsdtData ? (
          <p>AxlUsdt : {calculate(data.AxlUsdtData)}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PriceCheckCrescent;