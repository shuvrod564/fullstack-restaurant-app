import React from 'react'

const Heading = ({title=''}) => {
  return (
    <h1 className='text-xl md:text-2xl lg:text-3xl text-black font-bold'>{title}</h1>
  )
}

export default Heading