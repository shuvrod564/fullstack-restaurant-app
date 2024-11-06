'use client';
import React, { useRef, useState } from 'react'
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AiOutlineLoading3Quarters } from 'react-icons/ai' 

const ProductForm = ({fetchedData}) => {
    
    
    const formRef = useRef(null);
    const router = useRouter();
    // loading state
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    const handleFormSubmit=()=>{
        formRef.current.dispatchEvent(
            new Event('submit', {
                bubbles: true,
                cancelable: true
            })
        )
        
    }

    const onSubmit = async (data) => {
        //  console.log(data)
        try {
            setIsLoading(true);
            const res = await axios.post('/api/settings/product', data);
            console.log(res)
             
            if (res.data.status === 201) {
                toast.success(res.data.message);

            }
            if (res.data.status === 409) {
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
            

            <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className='grid grid-cols-1 lg:grid-cols-2 gap-5'
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='name' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Product Title <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <input
                                defaultValue=""
                                {...register("title",
                                    { required: true }
                                )}
                                className="input"
                            />
                            {errors.title && <span className='error'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='barcode' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Barcode <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <input
                                defaultValue=""
                                {...register("barcode",
                                    { required: true }
                                )}
                                className="input"
                                id="barcode"
                            />
                            {errors.barcode && <span className='error'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='status' className='label capitalize w-full md:w-[150px]'>Status <span className="text-red-500">*</span></label>
                        <div className="flex-1">
                            <div className="flex flex-wrap gap-3 gap-x-10">
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='radio'
                                        {...register("status",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="status1"
                                        value={"active"}
                                    />
                                    <label htmlFor="status1">Active</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='radio'
                                        {...register("status",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="status2"
                                        value={"inactive"}
                                    />
                                    <label htmlFor="status2">Inactive</label>
                                </div>
                            </div>
                            {errors.status && <span className='error'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='type' className='label capitalize w-full md:w-[150px]'>Type <span className="text-red-500">*</span></label>
                        <div className="flex-1">
                            <div className="flex flex-wrap gap-3 gap-x-10">
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='radio'
                                        {...register("type",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="type1"
                                        value={"normal"}
                                    />
                                    <label htmlFor="type1">Normal</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='radio'
                                        {...register("type",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="type2"
                                        value={"dividable"}
                                    />
                                    <label htmlFor="type2">Dividable</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='radio'
                                        {...register("type",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="type2"
                                        value={"raw"}
                                    />
                                    <label htmlFor="type2">Raw</label>
                                </div>
                            </div>
                            {errors.type && <span className='error'>This field is required</span>}
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='storage' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Storage <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <select {...register("storage")} className='select'>
                                <option value="" disabled defaultValue>Select Storage</option>
                                <option value="Drinks Store">Drinks Store</option>
                                <option value="Dry Goods Central Store">Dry Goods Central Store</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='category' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Category <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <select {...register("category")} className='select'>
                                <option value="" disabled defaultValue>Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Fabric">Fabric</option>
                                <option value="Ice Cream">Ice Cream </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='purchase_unit' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Purchase unit <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <select {...register("purchase_unit")} className='select'>
                                <option value="" disabled defaultValue>Select</option>
                                <option value="Bottle">Bottle</option>
                                <option value="Box">Box</option>
                                <option value="Packet">Packet</option>
                                <option value="Bag">Bag</option>
                                <option value="KG">KG</option>
                                <option value="Roll">Roll</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='counting_unit' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Counting unit <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <select {...register("counting_unit")} className='select'>
                                <option value="" disabled defaultValue>Select</option>
                                <option value="Bottle">Bottle</option>
                                <option value="Box">Box</option>
                                <option value="Packet">Packet</option>
                                <option value="Bag">Bag</option>
                                <option value="KG">KG</option>
                                <option value="Roll">Roll</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='price' className='label capitalize md:pt-2.5 w-full md:w-[150px]'>Price ($) <span className="text-red-500">*</span></label>
                        <div className=" flex-1">
                            <input
                                defaultValue=""
                                {...register("price",
                                    { required: true }
                                )}
                                className="input"
                                id="price"
                            />
                            {errors.price && <span className='error'>This field is required</span>}
                        </div>
                    </div>


                </div>
                {/* col */}

                <div className="flex flex-col gap-4">

                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='supplier' className='label capitalize w-full md:w-[150px]'>Supplier <span className="text-red-500">*</span></label>
                        <div className="flex-1">
                            <div className="flex flex-col gap-1">
                                {
                                    fetchedData?.map((supplier)=>(
                                        <div key={supplier?._id} className='flex items-center gap-2'>
                                            <input
                                                type='checkbox'
                                                {...register("supplier",
                                                    { required: true }
                                                )}
                                                className="input"
                                                id={supplier?._id}
                                                value={supplier?.name}
                                            />
                                            <label htmlFor={supplier?._id}>{supplier?.name}</label>
                                        </div> 
                                    ))
                                } 
                            </div>
                            {errors.supplier && <span className='error'>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-4 gap-2">
                        <label htmlFor='department' className='label capitalize w-full md:w-[150px]'>Department <span className="text-red-500">*</span></label>
                        <div className="flex-1">
                            <div className="flex flex-col gap-1">
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='checkbox'
                                        {...register("department",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="dep1"
                                        value={"bar"}
                                    />
                                    <label htmlFor="dep1">Bar</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='checkbox'
                                        {...register("department",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="dep2"
                                        value={"House kepping"}
                                    />
                                    <label htmlFor="dep2">House kepping</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type='checkbox'
                                        {...register("department",
                                            { required: true }
                                        )}
                                        className="input"
                                        id="dep3"
                                        value={"Kitchen"}
                                    />
                                    <label htmlFor="dep3">Kitchen</label>
                                </div>
                            </div>
                            {errors.department && <span className='error'>This field is required</span>}
                        </div>
                    </div>





                </div>
                {/* col */}


                <div className="md:col-span-2">
                    <button type="submit" className="btn-primary">
                        {isLoading ? <span className="inline-flex items-center gap-2"><AiOutlineLoading3Quarters className="text-xl" /> Loading</span> : 'Save'}
                    </button>
                </div>
            </form>
            {/* grid */}
        </>
    )
}

export default ProductForm;