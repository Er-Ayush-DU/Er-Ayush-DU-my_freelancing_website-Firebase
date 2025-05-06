import React from 'react'
import { useParams } from 'react-router-dom'  // Use Params is use for fetching tha data(values) from the URL
import { useAuth } from '../../context/AuthContext';


function Profile() {
  const { currentUser } = useAuth();
  const { userid } = useParams()
  return (
    <>
      <div className='bg-amber-400 text-center text-3xl text-white p-4'> Welcome To  {currentUser.displayName}</div>
    </>
  )
}

export default Profile;