import { coverPhoto, profilePhoto } from '@/assets'
import React from 'react'

const UserDetails = () => {
  return (
    <div className='rounded-lg bg-white overflow-hidden w-full max-w-sm mx-auto'>

      {/* cover photo */}
      <div className='relative'>                          
        <img src={coverPhoto} alt="cover" className='' />
        
        {/* profile photo */}
        <div className='flex justify-center' >
            <div className='absolute left-1/2 -bottom-9 transform -translate-x-1/2'>
            <img src={profilePhoto} alt="profile" className='w-20 h-auto rounded-full border-4 border-white' />
            </div>
        </div>
      </div>

      {/* user details */}
      <div className='mt-10 text-center px-10 pb-6'>
        <h2 className='text-[16px] font-semibold'>Albert Flores</h2>
        <p className='text-gray-500 text-sm'>
          Senior Product Designer | UI/UX Designer | Graphic Designer
        </p>
        <p className='text-gray-400 text-xs '>Clinton, Maryland</p>
      </div>

    </div>
  )
}

export default UserDetails
