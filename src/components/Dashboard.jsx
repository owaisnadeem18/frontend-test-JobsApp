import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import DashboardJobsSection from './DashboardJobsSection'

const Dashboard = () => {
    return (
        <div className='bg-[#F4F4F4] h-screen py-12' >

            <div className='container max-w-[95%] mx-auto' >
                <div className='flex gap-3' >

                    <div className='flex-[20%]' >
                        <DashboardSidebar />
                    </div>

                    <div className='flex-[80%]' >

                        <DashboardJobsSection />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Dashboard
