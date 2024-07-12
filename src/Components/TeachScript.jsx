import React from 'react'
import Teach from '../assets/teach-icon.png'

const TeachScript = () => {
  return (
    <div className='px-8 py-20 flex flex-col items-center justify-center'>
        <div className='p-6'>
            <img src={Teach} alt="" />
        </div>
        <div className='flex flex-col items-start gap-4'>
            <h1 className='text-left text-2xl text-primary-color pr-9'>Ignite Your Teaching Potential with TeachScript!</h1>
            <p className='text-left font-light text-sm leading-6'>It's easy to apply! Submit your resume, a brief video introduction, and the programming languages you'd like to teach. Our team will review your application and get in touch to discuss the next steps.</p>
            <button className='text-primary-color border rounded-full py-2 px-4 border-primary-color text-xs'>Be an Instructor</button>
        </div>

    </div>
  )
}

export default TeachScript