'use client' 
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaAngleLeft } from 'react-icons/fa6'; 

const BackButton = () => {
  const router = useRouter(); 
   
  const handleBackClick = () => {
    router.back();
  };

  return (
    <button type='button' onClick={handleBackClick} className='btn-primary !pl-2'>
        <FaAngleLeft className='text-xl hidden sm:inline-block relative' />
        Back
    </button>
  );
};

export default BackButton;
