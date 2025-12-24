import React from 'react'

const UserProfileStats = () => {
    return (
        <div className='bg-white p-4 rounded-lg' >

            <div className='flex flex-col gap-4 ' >
                <div className='flex justify-between border-b py-2 border-[#E9ECEF]' >

                    <span className='text-[14px]' >
  
                        Profile Visitors

                    </span>
                    <span className='text-[14px] text-[#0154AA] font-semibold' >
                        140
                    </span>

                </div>
                <div className='flex justify-between border-b py-2 border-[#E9ECEF]' >

                    <span className='text-[14px]' >

                        Resume Viewers

                    </span>
                    <span className='text-[14px] text-[#0154AA] font-semibold' >
                        20
                    </span>
                </div>
                <div className='flex justify-between' >

                    <span className='text-[14px]' >

                        My Jobs

                    </span>
                    <span className='text-[14px] text-[#0154AA] font-semibold' >
                        88
                    </span>

                </div>

            </div>

        </div>
    )
}

export default UserProfileStats
