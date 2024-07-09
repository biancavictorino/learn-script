import React from 'react'

function PrimaryButton( {styles, text} ) {
    return (
        <button className={`px-8 py-2 rounded-full bg-primary-color text-sm text-white font-light shadow-lg ${styles}`}>{text}</button>
      )
}

export default PrimaryButton