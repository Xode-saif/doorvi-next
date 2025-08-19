import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center text-7xl my-auto mx-auto h-screen'>
      <Image src="/assets/favicon.png" height={176} width={119} alt='DoorVi_logo' className='border-lg'/>
    </div>
  )
}

export default Loading