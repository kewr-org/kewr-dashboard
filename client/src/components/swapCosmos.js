import React from 'react'

function SwapCosmos() {
  return (
    <div className="px-4 mb-10">
            <Card className="bg-black">
                <CardRow className="text-center">
                    <img src={LogoTes} width="70" className='rounded-full'/>
                </CardRow>
                <h1 className='text-center text-white mt-2'>BALANCE COSMOS</h1>
                <h1 className='text-white'>Iris :</h1>
                <h1 className='text-white'>Cosmos :</h1>
                <h1 className='text-white'>Gravity :</h1>
                <h1 className='text-white'>USDC Grav :</h1>
                <h1 className='text-white'>BUSD :</h1>
            </Card>
        </div>
  )
}

export default SwapCosmos