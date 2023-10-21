import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import leftarrow from '../Assets/leftarrow.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Createusers = () => {


    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const navigate = useNavigate()

   


    const submitForm = async (e) => {
        e.preventDefault()
                await axios.post('http://localhost:3001/createusers', { name, desc, selectedStatus })
                await navigate('/category')
    }

   




    return (
        <div>
            <div className="main-container">
                <Navbar />
                <div className="main-container flex flex-row">
                    <Sidebar />

                    <div className='right-main-container border border-grey w-full rounded-md m-2 '>
                        <div className="sub-right-container">
                            <div className='flex flex-row h-auto w-40 justify-evenly'>
                                <img src={leftarrow} alt="" />
                                <h1 className='text-xl'><Link to='/category'>Add Category</Link></h1>
                            </div>
                        </div>

                        <form action="" method='post' className='flex flex-col'>
                            <div className="newContainer flex flex-row">
                                <label htmlFor="text">Category Name</label>
                                <input type="text" name="name" value={name} required id=""
                                    onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="text">Description</label>
                                <input type="text" name="desc" value={desc} required id=""
                                    onChange={(e) => setDesc(e.target.value)} />
                                <label htmlFor="text">Status</label>
                                <select name="status" value={selectedStatus} 
                                    onChange={handleStatusChange} required>status
                                    <option value=""></option>
                                    <option value="active" required>Active</option>
                                    <option value="inactive" required>inactive</option>

                                </select>
                            </div>


                            <div className="btn"><button onClick={submitForm}>Submit</button></div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Createusers