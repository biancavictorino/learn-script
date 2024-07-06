import React from 'react'
import { Learner } from '../Data/Learner'

const Learners = () => {
  return (
    <div className='px-8 py-16 lg:px-20 lg:py-24 flex flex-col items-center'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl text-primary-color'><span className='font-bold'><span className='text-text-color'>Learn</span>Script</span> Success Stories: </h1>
            <h1 className='text-2xl text-primary-color text-center'>Learners Like You, Achieving Coding Dreams!</h1>
            <p className='font-light text-md py-5 text-center'>Get inspired by real people who used LearnScript to unlock their coding potential!</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 lg:flex-row lg:w-3/4 lg:pt-6'>
            {
                Learner.map(person => (
                    <div className='border border-primary-color rounded-2xl flex flex-col items-center justify-center p-10 gap-4 text-center'>
                        <img className='h-44 w-44' src={person.image} alt="" />
                        <h1 className='font-semibold lg:w-2/3'>{person.title}</h1>
                        <p className='font-light text-md leading-7'>{person.story}</p>
                        <p className='text-primary-color font-light'>{person.name}</p>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Learners