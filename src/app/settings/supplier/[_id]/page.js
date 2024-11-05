 
import BackButton from '@/components/BackButton' 
import axios from 'axios';
import React from 'react' 
import Form from './Form';

// get data from db based on id
async function getData(id) {
    try {
        const res = await axios.get(`${process.env.DOMAIN}/api/settings/supplier/${id}`);
        // console.log(res.data)
        return res.data.data;
    } catch (error) {
        console.log('signle supplier fetch error: ', error);
    }
}


const page = async ({ params }) => {
    const userid = (await params)._id; 
    // console.log(userid, 'userid');
    const supplier = await getData(userid);
    // console.log(supplier);


  return (
    <>
         
        <main className='content__area'>
            <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
                <BackButton />
                <button className="btn-primary">Save</button>
            </div>

           
            <Form data={supplier} />

        </main>
    </>
  )
}

export default page