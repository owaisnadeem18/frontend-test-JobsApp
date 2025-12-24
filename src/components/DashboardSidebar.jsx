import React from 'react'
import UserDetails from './UserDetails'
import UserProfileStats from './UserProfileStats'
import MyInterviewsCalendar from './MyInterviewsCalendar'

const DashboardSidebar = () => {
  return (

    <div className=' flex  flex-col gap-2' >
      <UserDetails />
      <UserProfileStats/>
      <MyInterviewsCalendar/>
    </div>
    

  )
}

export default DashboardSidebar
