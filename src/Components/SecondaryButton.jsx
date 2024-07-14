import React from 'react'

function SecondaryButton({ text }) {
  return (
    <button className='text-primary-color border rounded-full py-2 px-6 border-primary-color text-xs'>{text}</button>
  )
}

export default SecondaryButton