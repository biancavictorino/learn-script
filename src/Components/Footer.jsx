import React from 'react'

const Footer = () => {
  return (
    <div className='px-8 flex flex-col gap-10 py-10 bg-primary-color bg-opacity-10 h-screen justify-center md:px-20 md:py-16 md:pb-20 md:flex-row md:h-auto'>
        <div className='md:w-2/5'>
            <h1 className='text-2xl font-bold'>Learn<span className='text-primary-color'>Script.</span></h1>
        </div>
        <div className='flex flex-col gap-10 text-primary-color md:flex-row md:w-3/5 md:justify-around text-sm'>
            <div className='flex flex-col gap-3'>
                <a href="" className='w-fit' >Courses</a>
                <a href="" className='w-fit'>Pricing</a>
                <a href="" className='w-fit'>TeachSrcipt</a>
                <a href="" className='w-fit'>FAQs</a>
            </div>

            <div className='flex flex-col gap-3'>
                <a href="" className='w-fit'>About Us</a>
                <a href="" className='w-fit'>Contact Us</a>
                <a href="" className='w-fit'>Download App</a>
            </div>

            <div className='flex flex-col gap-3'>
                <a href="" className='w-fit'>Terms</a>
                <a href="" className='w-fit'>Privacy and Policy</a>
                <a href="" className='w-fit'>Help and Support</a>
            </div>

        </div>
    </div>
  )
}

export default Footer