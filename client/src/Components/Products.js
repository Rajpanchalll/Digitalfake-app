import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom'


const Products = () => {
    return (
        <div>
            <Navbar />




            <div className="main-container flex flex-row h-full">
                <Sidebar />
                <div className="sub-main-container flex flex-row  h-16 w-full items-center justify-around">
                        <div className="first-sub-container flex flex-row items-center text-xl justify-around w-10">
                            {/* <img src={} alt="" /> */}
                            <h1 className='mx-4'>Products</h1>
                        </div>
                        <div className="second-sub-container w-96 mt-1">
                            <input type="search" name="search" id="" className=' h-8 w-full border border-dark-color rounded-lg' />

                        </div>
                        <div className="third-sub-container">
                            <Link to={'/createusers'} className='bg-navbar-background py-2 px-4 cursor-pointer rounded-md text-white'>Add New!</Link>
                        </div>


                    </div>

                    
            </div>


        </div>
    )
}

export default Products