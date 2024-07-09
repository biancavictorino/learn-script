import React from 'react'
import HeroImage from '../assets/hero-icon.png'
import PrimaryButton from './PrimaryButton'

const Hero = () => {
  return (
    <div className='px-8 h-screen flex flex-col-reverse justify-center md:flex-row md:px-20 md:gap-20'>
        <div className='flex flex-col items-start justify-center gap-2 md:w-3/5 md:gap-4'>
            <h1 className='text-3xl font-light md:text-5xl'>Unleash Your Inner Coder at LearnScript!</h1>
            <p className='text-sm font-light leading-6 pb-3 md:text-md md:leading-6 md:text-lg md:font-extralight '>One-stop shop to learn the language of the digital world - coding! Whether you're a complete beginner or a seasoned programmer looking to expand your skillset, we have something for everyone.</p>
            <PrimaryButton text={"Check Free Courses"}/>
        </div>
        <div className='flex items-center justify-center pt-10 pb-3 md:pt-0 md:pb-0'>
          <img src={ HeroImage } alt="" className='h-64 md:h-96' />

        </div>
    </div>
  )
}

export default Hero