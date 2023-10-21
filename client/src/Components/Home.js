import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import digitalhomelogo from '../Assets/digitalhomelogo.png'



const Home = () => {
    return (
        <div className='h-full w-full'>
            <Navbar />


            <div className="main-container flex flex-row ">

                <Sidebar />

               <div className="main-cotainer h-full w-full">
               <div className="sub-div-container flex flex-col items-center justify-center ">
              <div className="img-container mt-44">
              <img src={digitalhomelogo} alt="" />
              </div>
               <h1 className='text-2xl tracking-normal'>Welcome to Digitalflake Admin</h1>
               </div>
               </div>
            </div>



        </div>
    )
}

export default Home