'use client'
import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        accID: '',
        designation: ''
    });

    // handle form submission and validation
    const handleUserForm = async(e) => {
        e.preventDefault();
        // console.log(inputs); 

        const response = await axios.post('/api/settings/users/create', inputs);

        // console.log(response);
        
        
    }
  return (
    <>
        <form onSubmit={handleUserForm} className='grid grid-cols-2 gap-4 md:gap-5'>
            <div>
                <div className="input__box">
                    <label htmlFor='username' className='label'>User name</label>
                    <div className="relative"> 
                        <input 
                            type='text' 
                            id='username' name='username'
                            value={inputs.username}
                            onChange={(e)=>setInputs({ ...inputs, [e.target.name]: e.target.value })}
                            placeholder='Enter user name' 
                            required={true}
                        /> 
                    </div>
                </div>
            </div>
            <div>
                <div className="input__box">
                    <label htmlFor='email' className='label capitalize'>email address</label>
                    <div className="relative"> 
                        <input 
                            type='text' 
                            id='email' name='email'
                            value={inputs.email}
                            onChange={(e)=>setInputs({ ...inputs, [e.target.name]: e.target.value })}
                            placeholder='Enter email address' 
                            required={true}
                        /> 
                    </div>
                </div>
            </div>
            <div>
                <div className="input__box">
                    <label htmlFor='password' className='label capitalize'>password</label>
                    <div className="relative"> 
                        <input 
                            type='text' 
                            id='password' name='password'
                            value={inputs.password}
                            onChange={(e)=>setInputs({ ...inputs, [e.target.name]: e.target.value })}
                            placeholder='Enter password' 
                            required={true}
                        /> 
                    </div>
                </div>
            </div>
            <div>
                <div className="input__box">
                    <label htmlFor='accID' className='label capitalize'>user id</label>
                    <div className="relative"> 
                        <input 
                            type='text' 
                            id='accID' name='accID'
                            value={inputs.accID}
                            onChange={(e)=>setInputs({ ...inputs, [e.target.name]: e.target.value })}
                            placeholder='Enter accID' 
                            required={true}
                        /> 
                    </div>
                </div>
            </div>
            <div>
                <div className="input__box">
                    <label htmlFor='designation' className='label capitalize'>Designation</label>
                    <div className="relative"> 
                        <select 
                            name="designation" 
                            id="designation"  
                            onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})}
                        >
                            <option value="admin" defaultValue>admin</option>
                            <option value="manager">manager</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <button type="submit" className="btn-primary">Save</button>
            </div>
        </form>
    </>
  )
}

export default Form