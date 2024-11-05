import BackButton from '@/components/BackButton'
import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import AddSupplier from './AddSupplier'; 
import ActionButton from '@/components/ActionButton';
import { DeleteIcon, EditIcon } from '@/components/Icons'; 
import DeleteRecord from '@/components/DeleteRecord';

export const metadata = {
    title: "Supplier List",
    description: "Supplier List",
}

async function getData(params) {
    try {
        const res = await axios.get(`${process.env.DOMAIN}/api/settings/supplier`);
        return res.data.data;
    } catch (error) {
        console.log(error, 'Error for supplier fetch');
    }
}

const page = async () => {
    const data = await getData();
    // console.log(data);
    
  return (
    <div className='content__area'>
        <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
            <BackButton /> 
            <AddSupplier />
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index)=> (
                        <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <div className="flex gap-3"> 
                                    <ActionButton icon={<EditIcon className="mx-auto" />} label="" btnType="sm" link="link" url={`/settings/supplier/${item._id}`} />
                                    <DeleteRecord id={item._id} />
                                </div>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    {
                        data?.length === 0 && <td colSpan="5" className="text-center">No supplier found</td>
                    }
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default page