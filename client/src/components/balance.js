import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ibclistJSON from '../ibclist.json';

function Balance() {
const [categories, setCategories] = useState([]);
const [categoriesIris, setCategoriesIris] = useState([]);
const [categoriesCrescent, setCategoriesCrescent] = useState([]);

  useEffect(() => {
    retrieveCategories();
    retrieveCategoriesCrescent();
    retrieveCategoriesIris();
  },[]);

  const retrieveCategories = async () => {
    try{
      const { data } = await axios.get('http://localhost:5000/balances/osmo/')
      
      const mapData = data.balances.map((b) => {
        const denom = b.denom
        const getName = ibclistJSON.ics20.filter(i => i.denom === denom)[0]
        return {
          denom: getName ? getName.alias : 'Not Found',
          amount: b.amount
        }
      })

      setCategories(mapData)
    }catch(error){
      console.log(error)
    }
  }

  const retrieveCategoriesIris = async () => {
    try{
      const { data } = await axios.get('http://localhost:5000/balances/iris/')
      setCategoriesIris(data.result)
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

  const retrieveCategoriesCrescent = async () => {
    try{
      const { data } = await axios.get('http://localhost:5000/balances/crescent/')
      const mapDataCrescent = data.balances.map((b) => {
        const denom = b.denom
        const getName = ibclistJSON.ics20.filter(i => i.denom === denom)[0]
        return {
          denom: getName ? getName.alias : 'Not Found',
          amount: b.amount
        }
      })  
      setCategoriesCrescent(mapDataCrescent)
      console.log(data)
    }catch(error){
      console.log(error)
    }
  };

  return (
    <div className='row text-white text-center d-flex justify-content-center mt-5'>
          <div className='col-5'>
            <h4 className='border border-info'>Osmosis</h4>
            <ul>
              {categories.map((data,index) => (
                <p >- {data.denom} <br />{data.amount} </p>
              ))}
          </ul>
          </div>
          <div className='col-5'>
            <h4 className='border border-info'>Iris</h4>
            <ul>
              {categoriesIris.map((data,index) => (
                <p>- {data.denom}<br />{data.amount} </p>
              ))}
          </ul>
          </div>
          <div className='row justify-content-center text-white text-center d-flex mt-5'>
            <div className='col-6'>
              <h4 className='border border-info'>Crescent</h4>
              <ul>
              {categoriesCrescent.map((data,index) => (
                <p > - {data.denom}<br />{data.amount} </p>
              ))}
              </ul>
            </div>
          </div>
        </div>
        
  )
}

export default Balance