'use client';
import { LoginID, LoginPassword, LoginUser } from '@/components/Icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

 

const LoginForm = () => {
    const router = useRouter();
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        accID: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userIDError, setUserIDError] = useState('');
    
    // set the validations
    const validations = () => {
        let valid = true;
        if (inputs.username == '') {
            setUsernameError('Please enter a username');
            valid = false;
        } else {
            setUsernameError(''); 
        }
        if (inputs.password == '') {
            setPasswordError('Please enter a password'); 
            valid = false;
        } else {
            setPasswordError('');
        }
        if (inputs.accID == '') {
            setUserIDError('Please enter your account ID');
            valid = false;
        } else {
            setUserIDError('');
        }
        return valid;
    }

    // handle the login form submission
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);

        setError('')
        
        if (validations()) {
            try {
                const response = await axios.post('/api/login', inputs);
                console.log('response', response);

                // invalid credentials error
                if (response.data.status == 401) {
                    setError('Invalid credentials');
                    return;
                }

                // success login 
                if (response.data.status == 201) {
                    toast.success('Login Success');
                    router.push('/');
                }
            } catch (error) {
                console.log('login error: '+ error.message)
            }
        }

    }


    return (
        <>
            <form onSubmit={handleLoginSubmit} className='flex flex-col gap-5 mt-6'>
                {
                    error != '' && ( 
                        <div>
                            <ul className=" bg-red-50 border border-red-200 p-3 rounded-lg text-red-500 pl-6">
                                <li className='list-disc'>{error}</li>
                            </ul>
                        </div>
                    )
                }
                <div>
                    <div className="relative">
                        <LoginUser />
                        <input
                            type="email" id="username" name="username"
                            className='w-full h-14 border border-bc bg-[#f9f9f9] rounded-xl pl-12 pr-5 py-2 text-base font-medium focus:outline-none'
                            placeholder="User name"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}
                        />
                    </div>
                    { usernameError && <div className='text-red-500 text-sm mt-1'>{usernameError}</div> }
                </div>
                <div>
                    <div className="relative">
                        <LoginPassword />
                        <input
                            type="password" id="password" name="password"
                            className='w-full h-14 border border-bc bg-[#f9f9f9] rounded-xl pl-12 pr-5 py-2 text-base font-medium focus:outline-none'
                            placeholder="Password"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}
                            />
                    </div>
                    { passwordError && <div className='text-red-500 text-sm mt-1'>{passwordError}</div> }
                </div>
                <div>
                    <div className="relative">
                        <LoginID />
                        <input
                            type="text" id="accID" name="accID"
                            className='w-full h-14 border border-bc bg-[#f9f9f9] rounded-xl pl-12 pr-5 py-2 text-base font-medium focus:outline-none'
                            placeholder="Accound ID"
                            value={inputs.accID}
                            onChange={(e) => setInputs({ ...inputs, [e.target.name]: e.target.value })}
                        />
                    </div>
                    { userIDError && <div className='text-red-500 text-sm mt-1'>{userIDError}</div> }
                </div>
               
                <div className="text-center">
                    <button type='submit' className="btn-primary px-10">Sign in</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm