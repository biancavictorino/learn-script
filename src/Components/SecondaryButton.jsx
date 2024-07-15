import React from 'react'

function SecondaryButton({ text }) {
  return (
    <button className='text-primary-color border rounded-full py-2 px-6 border-primary-color text-xs hover:bg-primary-color hover:shadow-primary-color hover:bg-opacity-30 hover:border-opacity-30'>{text}</button>
  )
}

export default SecondaryButton