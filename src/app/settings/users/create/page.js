import React from 'react'
import Form from './Form'
import Heading from '@/components/Heading'
import BackButton from '@/components/BackButton'



const page = async () => {
  
  
  return (
    <div className='content__area'>
        <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7"> 
            <BackButton /> 
        </div>
        <Form />
    </div>
  )
}

export default page