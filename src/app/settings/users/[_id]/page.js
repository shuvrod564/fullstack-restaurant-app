 
import axios from 'axios';
import React from 'react'
import Form from './Form';
import BackButton from '@/components/BackButton';

async function getData(userid) {
  try { 
    // fetch data from your API or database based on the provided id
    const response = await axios.post(`${process.env.DOMAIN}/api/settings/users/edit`, {userid});
    const fetchData = response.data.data;
    // console.log('response', response.data.data);
    // console.log('response', userid);
    return fetchData;
    
  } catch (error) {
    console.log(error);
  } 
}

export const metadata = {
  title: "Edit user"
}

const page = async ({params}) => { 
    const userid = (await params)._id;
     
    const data = await getData(userid);
    // console.log('fetched user:', data);
    
     
  return (
    <div className='content__area'>
      <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
        <BackButton /> 
      </div>
      
      <Form data={data} />
    </div>
  )
}

 

export default page