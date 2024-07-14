import React from 'react'
import Check from '../assets/Check.svg'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const Pricing = () => {
  return (
    <div className='px-8 py-12 flex flex-col items-center justify-center gap-4 md:px-28 md:py-20 md:gap-8'>
        <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-center text-2xl text-primary-color'>Invest In Your Coding Journey</h1>
            <p className='text-center text-sm font-light leading-6 md:w-1/2'>We offer a variety of <span className='text-primary-color'>awesome plans</span> to fit in your coding goals and budget. No matter if you're a complete beginner or a coding rockstar in the making, we have something for you!</p>
        </div>

        <div className='grid grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1'>
            <div className='card-1 border border-primary-color flex flex-col justify-center items-center px-8 py-12 rounded-2xl gap-12 shadow-lg'>
                <div className='heading flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-center text-text-color font-bold text-2xl'>Learn<span className='text-primary-color'>Script</span> <span className='font-normal'>Pro</span></h1>
                    <p className='text-center text-md font-light leading-6'>Focuses on essential skills, practical learning, and affordability for students.</p>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row justify-center items-end'>
                        <h1 className='font-bold text-4xl'>$25</h1>
                        <p className='text-sm'>/month</p>
                    </div>
                    <PrimaryButton text={"Start a 7-day Free Trial"}/>
                    <p className='text-center text-sm font-light'>Cancel Anytime</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Job-Ready Languages & Frameworks</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Industry Vets Share Real-World Knowledge</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Valuable Certificate</p>
                    </div>
                </div>
            </div> 

            <div className='card-2 border border-primary-color flex flex-col justify-center items-center px-8 py-12 rounded-2xl gap-12 shadow-lg'>
                <div className='heading flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-center text-text-color font-bold text-2xl'>Learn<span className='text-primary-color'>Script</span> <span className='font-normal'>Premium</span></h1>
                    <p className='text-center text-md font-light leading-6'>Highlights the extensive course selection, personalized learning experience, and flexible learning format.</p>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row justify-center items-end'>
                        <h1 className='font-bold text-4xl'>$49</h1>
                        <p className='text-sm'>/month</p>
                    </div>
                    <SecondaryButton text={"Try LearnScript Premium"}/>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Job-Ready Languages & Frameworks</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Downloadable Code & Quizzes</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Interactive Projects & Labs</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Valuable Certificate</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Industry Vets Share Real-World Knowledge</p>
                    </div>
                </div>
            </div>  

            <div className='card-3 border border-primary-color flex flex-col justify-center items-center px-8 py-12 rounded-2xl gap-12 shadow-lg'>
                <div className='heading flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-center text-text-color font-bold text-2xl'>Learn<span className='text-primary-color'>Script</span> <span className='font-normal'>Teams</span></h1>
                    <p className='text-center text-md font-light leading-6'>Businesses and organizations looking to upskill their workforce or train new hires.</p>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row justify-center items-end'>
                        <h1 className='font-bold text-4xl'>$89</h1>
                        <p className='text-sm'>/month</p>
                    </div>
                    <SecondaryButton text={"Try Learn-Script Teams"}/>
                    <p className='text-center text-sm font-light'>For 4-50 Users</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Close Skill Gaps & Meet Project Needs</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Team Dashboard & Track Progress</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Discussion Forums & Group Projects</p>
                    </div>
                    <div className='flex flex-row text-sm justify-start items-center gap-3'>
                        <img src={Check} alt="" />
                        <p>Recognize Collective Achievement</p>
                    </div>
                </div>
            </div>  

        </div>
    </div>
  )
}

export default Pricing