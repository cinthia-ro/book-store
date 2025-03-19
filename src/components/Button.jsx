import React from 'react'
import Form from './Form'
import { useState } from 'react';

const Button = ({buttonTitle }) => {
     const [displayForm, setDisplayForm]=useState(false);
  return (
    <div>
      <button className='text-white bg-green-600 py-1 px-4 rounded-md mt-4' onClick={() => setDisplayForm(!displayForm)}>{buttonTitle} </button>
      
      { displayForm &&(<div>
<Form/>
      </div>)}
    </div>

  )
}

export default Button
