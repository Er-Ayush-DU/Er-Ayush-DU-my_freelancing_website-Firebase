import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

function Settings() {
  // const { currentUser } = useAuth();
  const { userid } = useParams()
  return (
    <>
      <div className='bg-amber-400 text-center text-3xl text-white p-4'> Welcome To  {userid}</div>
    </>
  )
}

export default Settings;