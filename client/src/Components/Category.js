import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import products from '../Assets/image-213.png'

import axios from 'axios'


const Category = () => {



    const [data, setData] = useState([{
        id: 0,
        name:'Raj panchal',
        desc: "Hello there!!!",
        status: 'active'
    }])

   


    useEffect(() => {



        async function fetchData(newData) {
            try {
                const response = await axios.get('http://localhost:3001/category'); // Replace with your API endpoint
                setData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
            



        }

        fetchData()
    }, [])


    return (
        <div>
            <Navbar />


            <div className="main-container flex flex-row">
                <Sidebar />
                <div className="main-container w-full">
                    <div className="sub-main-container flex flex-row  h-16 w-full items-center justify-around">
                        <div className="first-sub-container flex flex-row items-center text-xl justify-around w-10">
                            <img src={products} alt="" />
                            <h1 className='mx-4'>Category</h1>
                        </div>
                        <div className="second-sub-container w-96 mt-1">
                            <input type="search" name="search" id="" className=' h-8 w-full border border-dark-color rounded-lg' />

                        </div>
                        <div className="third-sub-container">
                            <Link to={'/createusers'} className='bg-navbar-background py-2 px-4 cursor-pointer rounded-md text-white'>Add New!</Link>
                        </div>


                    </div>

                    <div className=" h-12 w-full mt-5 bg-yellobackground-color">

                        <div className=" flex flex-row justify-between items-center  h-12  align-middle px-5">
                            <div className=" flex flex-row w-52 justify-around items-center">
                                <p>ID</p>
                                <p>Name</p>

                            </div>
                            <p>Description</p>
                            <p>Status</p>
                        </div>

                        <div className="data-container mt-10 w-full text-center">

                        <ul>
                            {
                                data.map((item) =>{
                                  return <p>{item.name}</p>,
                                  <p>{item.desc}</p>
                                })
                            }
                        </ul>


                           



                      



                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Category