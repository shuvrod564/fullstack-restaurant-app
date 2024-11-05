'use client'
import React, { useState } from 'react' 
import { useForm } from 'react-hook-form' 
import axios from 'axios'
import { toast } from 'react-toastify'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const Form = ({ data }) => {
    const router = useRouter();
    // supplier id
    const supplierID = data?._id;
    // loading state
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
 
    
    
    const onSubmit = async (data) => { 
        // console.log(data)
        try {
            setIsLoading(true);
            const res = await axios.put(`/api/settings/supplier/${supplierID}`, data);
            console.log(res)
            if (res.data.status === 201) { 
                router.push('/settings/supplier'); 
                toast.success(res.data.message);
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
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 md:grid-cols-2 gap-5'
            >
                 <input
                    type="hidden"
                    defaultValue={data?._id}
                    {...register("id")} 
                />
                <div>
                    <div className="outlined__input">
                        <label htmlFor='name' className='label capitalize'>Supplier name</label>
                        <input
                            defaultValue={data?.name}
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
                            defaultValue={data?.email}
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
                            defaultValue={data?.phone}
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
                            defaultValue={data?.address}
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
                        {isLoading ? <span className="inline-flex items-center gap-2"><AiOutlineLoading3Quarters className="text-xl" /> Loading</span> : 'Update'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form