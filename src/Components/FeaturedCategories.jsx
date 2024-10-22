import React, { useEffect } from 'react'
import { category1 } from '../Data/Category1'
import { category2 } from '../Data/Category2'
import PrimaryButton from './PrimaryButton'

//AOS
import Aos from 'aos'
import 'aos/dist/aos.css';

const FeaturedCategories = () => {
    
    useEffect(() => {
        Aos.init({duration:1000})
    })


  return (
    <div className='flex flex-col px-8 py-8 gap-4 lg:px-20 lg:h-screen overflow-hidden'>
        <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='bg-primary-color text-white shadow-lg shadow-primary-color p-8 rounded-3xl lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:p-10' data-aos='fade-right'>
                <h1 className='font-semibold lg:text-xl'>View some of our Featured Courses</h1>
                <p className='font-light lg:text-xl'>We've curated a selection of our most popular and highly-rated courses to help you kickstart your coding journey.</p>
            </div>
            <div className='flex flex-row gap-4 lg:w-1/2'>
                {
                    category1.map(cat1 => (
                        <div className='w-1/2 shadow-lg rounded-3xl pb-6 flex flex-col justify-between h-full transition-transform transform hover:-translate-y-2'>
                            <div className='flex flex-col flex-grow'>
                                <img className='lg:w-full' src={cat1.image} alt="" />
                                <h1 className='font-semibold px-5 pt-3'>{cat1.title}</h1>
                                <p className='font-light text-sm px-5 pb-3 text-pretty'>{cat1.description}</p>
                            </div>

                            <div className='flex justify-center mt-auto'>
                            <button className='border border-primary-color rounded-full py-2 flex w-5/6 items-center justify-center text-primary-color font-medium text-sm hover:bg-primary-color hover:shadow-primary-color hover:bg-opacity-30 hover:border-opacity-30'>{cat1.action}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>

        <div className='flex flex-col-reverse gap-4 lg:flex-row-reverse'>
            <div className='flex flex-col text-center justify-center items-center bg-white text-text-color shadow-xl p-8 rounded-3xl gap-4 lg:w-1/2 lg:gap-6' data-aos='fade-left'>
                <p className='font-light lg:text-xl'>Whether you're a complete beginner or looking to refine your skills, we have something for everyone.</p>
                <PrimaryButton text={"Enroll Now"}/>
            </div>
            <div className='flex flex-row gap-4 lg:w-1/2'>
                {
                    category2.map(cat2 => (
                        <div className='w-1/2 shadow-lg rounded-3xl pb-6 flex flex-col justify-between h-full transition-transform transform hover:-translate-y-1'>
                            <div className='flex flex-col flex-grow'>
                                <img className='lg:w-full' src={cat2.image} alt="" />
                                <h1 className='font-semibold px-5 pt-3'>{cat2.title}</h1>
                                <p className='font-light text-sm px-5 pb-3 text-pretty'>{cat2.description}</p>
                                <div className='flex justify-center'>
                            </div>

                            <div className='flex justify-center mt-auto'>
                                <button className='border border-primary-color rounded-full py-2 flex w-5/6 items-center justify-center text-primary-color font-medium text-sm hover:bg-primary-color hover:shadow-primary-color hover:bg-opacity-30 hover:border-opacity-30'>{cat2.action}</button>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedCategories