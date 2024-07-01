import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpen = () => {
        setMenuOpen(!menuOpen);
    }



  return (
    <div className='px-8 py-6 flex flex-row items-center justify-between md:px-14'>
        <div className='logo font-bold flex flex-row text-xl'>
            <h1 className=''>Learn</h1>
            <h1 className='text-primary-color'>Script.</h1>
        </div>

        <div className='px-9 md:px-0'>

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
                    <input type="text" placeholder='What do you want to learn?' className='pr-2 placeholder:text-sm pl-4 rounded-full'/>
                    <button className='text-sm bg-primary-color px-3 py-2 rounded-full text-white'>Search</button>
                </form>
            </div>
        </div>
        <div className='flex flex-row gap-4 items-center text-sm'>
            <a href="" className='text-primary-color font-medium'>Login</a>
            <button className='text-primary-color border rounded-full py-2 px-4 border-primary-color'>Join For Free</button>
        </div>
        <svg onClick={handleOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className={`${menuOpen ? 'flex flex-col fixed bg-white shadow-lg right-0 top-0 h-screen w-3/4 z-40 justify-center items-center gap-6' : 'hidden'}`}>
            <svg onClick={handleOpen} className='h-6 w-6 absolute top-8 right-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <a href="">Courses</a>
            <a href="">Pricing</a>
            <a href="">TeachScript</a>
            <a href="">FAQ</a>
        </div>
    </div>
  )
}

export default Navbar