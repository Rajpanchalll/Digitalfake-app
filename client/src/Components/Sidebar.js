import React from 'react'
import { Link } from 'react-router-dom'
import home from '../Assets/image-223.png'
import category from '../Assets/image-213.png'
import products from '../Assets/image-222.png'
import rightbtn from '../Assets/right-btn.png'




const Sidebar = () => {

    return (
        <div className='h-full'>
            <div className="container h-screen flex flex-col bg-side-background w-60 text-xl items-center text-black ">
                <div className="main-div">
                    <div className="first-div flex flex-row items-center w-60 justify-between mt-10 active:bg-yellow-200">
                        <div className='flex flex-row items-center'>
                            <img src={home} alt="" className='h-5 mx-3' />
                            <Link to='/home' >
                                Home
                            </Link>
                        </div>
                        <div><img src={rightbtn} alt="" className='h-4 px-2' /></div>
                    </div>
                    <div className="first-div flex flex-row w-60 items-center justify-between  mt-10 active:bg-yellow-200 ">
                        <div className='flex flex-row items-center'>
                            <img src={category} alt="" className='h-5 mx-3' />
                            <Link to='/category'>
                                category
                            </Link>
                        </div>
                        <div><img src={rightbtn} alt="" className='h-4 px-2' /></div>
                    </div>
                    <div className="first-div flex flex-row  w-60 items-center justify-between  mt-10 active:bg-yellow-200">
                        <div className='flex flex-row items-center'>
                            <img src={products} alt="" className='h-5 mx-3 ' />
                            <Link to='/products'>
                                products
                            </Link>
                        </div>
                        <div><img src={rightbtn} alt="" className='h-4 px-2' /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar