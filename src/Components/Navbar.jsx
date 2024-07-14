import React, { useState } from 'react'
import SecondaryButton from './SecondaryButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
        setMenuOpen(!menuOpen);
    }



  return (
    <div className='absolute w-full px-8 py-6 flex flex-row items-center justify-between md:px-20'>
        <div className='logo font-bold flex flex-row text-xl'>
            <h1 className=''>Learn</h1>
            <h1 className='text-primary-color'>Script.</h1>
        </div>

        <div className='px-3 md:px-0'>

        </div>
        <div className='hidden md:flex md:flex-row gap-24 font-light items-center'>
            <div className='flex flex-row gap-6'>
                <a href="">Courses</a>
                <a href="">Pricing</a>
                <a href="">TeachScript</a>
                <a href="">FAQ</a>
            </div>
            <div className='search-bar w-auto border flex flex-row items-center rounded-full border-primary-color'>
                <form action="submit" className='flex flex-row gap-6'>
                    <input type="text" placeholder='What do you want to learn?' className='pr-2 placeholder:text-sm pl-4 rounded-full focus:outline-none'/>
                    <button className='text-sm bg-primary-color px-3 py-2 rounded-full text-white'>Search</button>
                </form>
            </div>
        </div>
        <div className='flex flex-row gap-2 items-center text-sm'>
            <a href="" className='hidden md:flex text-primary-color font-medium'>Login</a>
            <SecondaryButton text={"Join for Free"}/>
        </div>
        <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className={`${menuOpen ? 'flex flex-col fixed bg-white shadow-lg right-0 top-0 h-screen w-3/4 z-40 justify-center items-center gap-6' : 'hidden'}`}>
            <a href="">Courses</a>
            <a href="">Pricing</a>
            <a href="">TeachScript</a>
            <a href="">FAQ</a>
            <svg onClick={handleOpen} className='w-6 h-6 right-8 top-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
  )
}

export default Navbar