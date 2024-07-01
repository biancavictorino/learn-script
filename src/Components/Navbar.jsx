import React from 'react'

const Navbar = () => {
  return (
    <div className='px-8 py-6 flex flex-row items-center justify-between md:px-14'>
        <div className='logo font-bold flex flex-row text-xl'>
            <h1 className=''>Learn</h1>
            <h1 className='text-primary-color'>Script.</h1>
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

    </div>
  )
}

export default Navbar