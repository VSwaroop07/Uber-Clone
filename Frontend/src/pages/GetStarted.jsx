import React from 'react'
import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div>
        <div className="bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-bottom h-screen flex justify-between flex-col w-full">
          <img className="w-24" src="/uber-logo-png.png" alt="Uber Logo" />
            <div className="bg-white pb-7 py-4 px-4">
            <h2 className="text-2xl font-bold">Get Started With Uber.</h2>
            <Link to='/login'  className='flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default GetStarted