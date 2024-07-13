import React from 'react'

const Footer = () => {
  return (
    <div className='px-8 flex flex-col gap-8 py-10 bg-primary-color bg-opacity-10'>
        <div>
            <h1 className='text-2xl font-bold'>Learn<span className='text-primary-color'>Script.</span></h1>
        </div>
        <div className='flex flex-col gap-8 text-primary-color'>
            <div className='flex flex-col gap-2 w-auto'>
                <a href="" className='w-fit' >Courses</a>
                <a href="" className='w-fit'>Pricing</a>
                <a href="" className='w-fit'>TeachSrcipt</a>
                <a href="" className='w-fit'>FAQs</a>
            </div>

            <div className='flex flex-col gap-2'>
                <a href="" className='w-fit'>About Us</a>
                <a href="" className='w-fit'>Contact Us</a>
                <a href="" className='w-fit'>Download App</a>
            </div>

            <div className='flex flex-col gap-2'>
                <a href="" className='w-fit'>Terms</a>
                <a href="" className='w-fit'>Privacy and Policy</a>
                <a href="" className='w-fit'>Help and Support</a>
            </div>

        </div>
    </div>
  )
}

export default Footer