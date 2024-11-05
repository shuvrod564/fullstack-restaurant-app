'use client'
import ActionButton from '@/components/ActionButton'
import { DeleteIcon } from '@/components/Icons' 
import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { IoCloseOutline } from 'react-icons/io5'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const DeleteRecord = ({ id='' }) => {
    // modal state
    let [isOpen, setIsOpen] = useState(false); 

    // modal control
    function open() {
        setIsOpen(true)
    } 
    function close() {
        setIsOpen(false)
    }

    const handleDeleteSupplier = async (id) => {
        setIsOpen(true);   
    }
    // supplier control
    const handleDeleteRecordApi = async (id) => {
        console.log(id);
         
        const response = await axios.delete(`/api/settings/supplier/${id}`);
        console.log(response, 'delete');
        if (response.data.status === 201) { 
            toast.success(response.data.message);  
        } else { 
            toast.error(response.data.message);
        }
    }
  return (
    <>
        <ActionButton 
            onClick={()=>handleDeleteSupplier(id)}
            icon={<DeleteIcon className="mx-auto" />} 
            label="" btnType="sm" 
        />
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={close}>
                <div className="fixed inset-0 z-50 bg-black/50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-4 lg:pt-24">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {/* <div className="text-right"> 
                                <button
                                    className="text-2xl md:text-2xl"
                                    onClick={close}
                                >
                                        <IoCloseOutline />
                                </button> 
                            </div> */}
                            <div className="">
                                <h3 className="text-lg md:text-xl font-semibold text-balck mb-3">
                                    Are you sure to delete this record?
                                </h3>
                                <p className="mb-6 text-slate-500">
                                    If you delete this record, you will permanently loss all of its information. Do you wish to proceed?
                                </p>
                                <div
                                    // onSubmit={handleSubmit(onSubmit)}
                                    className='grid grid-cols-1 md:grid-cols-1 gap-5'
                                >
                                    
                                    <div className="flex gap-3">
                                        <button type="button" onClick={()=>handleDeleteRecordApi(id)} className="text-sm font-medium px-5 py-2 rounded-lg border border-red-400 text-white bg-red-400 hover:text-red-400 focus:text-red-400">
                                            Delete 
                                        </button>
                                        <button type="button" onClick={close} className="text-sm font-medium px-5 py-2 rounded-lg border border-slate-400 text-slate-400">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
    </>
  )
}

export default DeleteRecord