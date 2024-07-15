import React from 'react'
import Teach from '../assets/teach-icon.png'
import SecondaryButton from './SecondaryButton'

const TeachScript = () => {
  return (
    <div className='px-8 py-20 flex flex-col items-center justify-center md:px-20 md:flex-row md:h-screen'>
        <div className='p-6 md:w-1/2' data-aos='fade-right'>
            <img src={Teach} alt="" />
        </div>
        <div className='flex flex-col items-start gap-4 md:w-1/2' data-aos='fade-left'>
            <h1 className='text-left text-2xl text-primary-color pr-9 md:text-3xl md:w-5/6'>Ignite Your Teaching Potential with TeachScript!</h1>
            <p className='text-left font-light text-sm leading-6'>It's easy to apply! Submit your resume, a brief video introduction, and the programming languages you'd like to teach. Our team will review your application and get in touch to discuss the next steps.</p>
            <SecondaryButton text={"Be an Instructor"}/>
        </div>
    </div>
  )
}

export default TeachScript