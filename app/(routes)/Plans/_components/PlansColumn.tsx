import React from 'react'

const PlansColumn = () => {
  return (
    <div >
        <div className='w-[85rem] h-[4rem] border rounded-lg bg-[#F2EDE3] flex justify-around items-center my-10'>
            <h2 className='text-black text-xl font-medium w-[4rem]'>Month</h2>
            <h2 className='text-black text-xl font-medium w-[9rem]'>Amount to pay</h2>
            <h2 className='text-black text-xl font-medium w-[7rem]'>Withdraw{"   "} Amount</h2>
        </div>
    </div>
  )
}

export default PlansColumn;