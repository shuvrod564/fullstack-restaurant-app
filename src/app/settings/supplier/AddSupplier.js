'use client'
import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { IoCloseOutline } from 'react-icons/io5'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const AddSupplier = () => {
    // modal state
    let [isOpen, setIsOpen] = useState(false);
    // loading state
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    // modal control
    function open() {
        setIsOpen(true)
    } 
    function close() {
        setIsOpen(false)
    }

    const onSubmit = async (data) => { 
        // console.log(data)
        try {
            setIsLoading(true);
            const res = await axios.post('/api/settings/supplier', data);
            // console.log(res)
            if (res.data.status === 201) {
                setIsOpen(false);
                toast.success(res.data.message);
                resetField('name');
                resetField('email');
                resetField('phone');
                resetField('address'); 
            } 
            if (res.data.status === 500) {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setIsLoading(false);
        }
    }

   
    return (
        <>
            <button onClick={() => setIsOpen(true)} className="btn-primary">Add</button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={close}>
                <div className="fixed inset-0 z-50 bg-black/50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className="flex items-center justify-between -mt-2 mb-7 lg:mb-10">
                                <DialogTitle as="h3" className="text-lg md:text-xl font-semibold text-primary">
                                    Add new supplier details
                                </DialogTitle>
                                <button
                                        className="text-2xl md:text-2xl"
                                        onClick={close}
                                    >
                                        <IoCloseOutline />
                                </button> 
                            </div>
                            <div className=" ">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className='grid grid-cols-1 md:grid-cols-1 gap-5'
                                >
                                    <div> 
                                        <div className="outlined__input">
                                            <label htmlFor='name' className='label capitalize'>Supplier name</label>
                                            <input 
                                                defaultValue="" 
                                                {...register("name",
                                                    { required: true }
                                                )} 
                                                placeholder='Name'
                                            /> 
                                        </div>
                                        {errors.name && <span className='error'>This field is required</span>}
                                    </div>
                                    <div> 
                                        <div className="outlined__input">
                                            <label htmlFor='email' className='label capitalize'>Email address</label>
                                            <input 
                                                defaultValue="" 
                                                {...register("email",
                                                    { required: true }
                                                )} 
                                                placeholder='Email'
                                            /> 
                                        </div>
                                        {errors.email && <span className='error'>This field is required</span>}
                                    </div>
                                    <div> 
                                        <div className="outlined__input">
                                            <label htmlFor='phone' className='label capitalize'>Phone</label>
                                            <input 
                                                defaultValue="" 
                                                {...register("phone",
                                                    { required: true }
                                                )} 
                                                placeholder='Phone'
                                            /> 
                                        </div>
                                        {errors.phone && <span className='error'>This field is required</span>}
                                    </div>
                                    <div> 
                                        <div className="outlined__input">
                                            <label htmlFor='address' className='label capitalize'>Address</label>
                                            <textarea  
                                                defaultValue="" 
                                                {...register("address",
                                                    { required: true }
                                                )} 
                                                placeholder='Address'
                                            /> 
                                        </div>
                                        {errors.address && <span className='error'>This field is required</span>}
                                    </div>
                                    <div>
                                        <button type="submit" className="btn-primary">
                                            { isLoading ? <span className="inline-flex items-center gap-2"><AiOutlineLoading3Quarters className="text-xl" /> Loading</span> :  'Save' } 
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default AddSupplier