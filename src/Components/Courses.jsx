import React from 'react'
import { course } from '../Data/Course'
import PrimaryButton from './PrimaryButton'

const Courses = () => {
  return (
    <div className='px-8 py-20 flex flex-col gap-8 items-center md:items-start md:px-20 md:pb-20'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
            <h1 className='text-2xl font-semibold text-primary-color text-center md:text-left md:w-2/3'>Level Up Your Skills. Explore Our Comprehensive Course Library.</h1>
            <div className='w-auto flex flex-row items-center justify-between'>
                <form action="submit" className='flex flex-row border rounded-full border-primary-color gap-6 justify-between md:gap-16'>
                    <input type="text" placeholder='What do you want to learn?' className='pr-2 placeholder:text-sm pl-4 rounded-full focus:outline-none'/>
                    <button className='text-sm bg-primary-color px-3 py-2 rounded-full text-white hover:bg-white hover:text-primary-color border border-primary-color'>Search</button>
                </form>
            </div>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:items-stretch' data-aos='fade-right'>
            {
                course.map(learn => (
                    <div className='max-w-80 border rounded-3xl md:w-full shadow-lg'>
                        <img src={learn.image} alt="" className='w-96'/>
                        <div className='py-3 px-4 flex flex-col gap-2'>
                            <h1 className='text-md font-bold'>{learn.course}</h1>
                                <div className='flex flex-row items-center gap-1'>
                                    <img src={learn.icon} alt="" />
                                    <p className='text-xs font-light'>{learn.instructor}</p>
                                </div>
                            <p className='text-pretty text-sm'>{learn.description}</p>
                            <p className='text-primary-color font-bold text-right px-2'>{learn.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='w-full flex justify-center'>
            <PrimaryButton text={"View More Courses"}/>
        </div>
    </div>
  )
}

export default Courses
