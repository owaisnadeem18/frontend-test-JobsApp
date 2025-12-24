import { downArrow } from '@/assets'
import React from 'react'

const MyInterviewsCalendar = () => {
  return (
    <div className='bg-white p-2.5 rounded-lg flex justify-between items-center' >
      <div className='flex flex-col' >
        <span className='font-semibold leading-4.5 text-md' > My calendar </span>
        <span className='text-[#737A91] leading-4.5 text-sm' > Upcoming Interviews </span>
      </div>
      <img src= {downArrow} alt="downArrow" className='cursor-pointer' />
    </div>
  )
}

export default MyInterviewsCalendar