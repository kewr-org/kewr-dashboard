import React from 'react'
import AddAgoricDevnet from './ChainAdd/AddAgoricDevnet'
import AddCanto from './ChainAdd/AddCanto'
import AddPlanq from './ChainAdd/AddPlanq'
import AddEchelon from './ChainAdd/AddEchelon'
import AddGnoland from './ChainAdd/AddNyx'
import AddPointNetwork from './ChainAdd/AddPointNetwork'

function ChainAdd() {
  return (
    <>
    <div className='border border-white p-3 mt-4'>
    <h1 className=' text-cyan-400 text-3xl font-bold'>Chain Add</h1>
    </div>
    <div className="flex flex-row h-64 justify-around">
  <div className="flex flex-col justify-around justify-items-center">
  <AddCanto />
  <AddEchelon />
  </div>
  <div className="flex flex-col justify-around justify-items-center">
  <AddPointNetwork />
  <AddAgoricDevnet />
  </div>
  <div className="flex flex-col justify-around justify-items-center">
  <AddPlanq />
  <AddGnoland />
  </div>
  </div>
  </>
  )
}

export default ChainAdd