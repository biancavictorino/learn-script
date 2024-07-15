import React from 'react'

function PrimaryButton( {styles, text} ) {
    return (
        <button className={`px-8 py-2 rounded-full bg-primary-color text-sm text-white font-light shadow-lg border border-primary-color hover:bg-white hover:text-primary-color ${styles}`}>{text}</button>
      )
}

export default PrimaryButton