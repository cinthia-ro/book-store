import React from 'react'

import { useNavigate } from 'react-router-dom'

const BookItem = ({bookTitle, author, price, book_Image, id}) => {
const navigate= useNavigate();

  const handleMore = ()=>{
navigate(`/Detail-Book/${id}`);
}

  return (
    <div>
    
     <div className='text-center item-center justify-center w-[30%]'>
         <img src={book_Image} alt="" className='' />
         <h3 className='text-[1.1rem] font-medium'>{bookTitle}</h3>
        <p>{author}</p>
<p className='text-green-600'> {price}</p>
<button className='text-white bg-green-600 py-1 px-4 rounded-md mt-4'onClick={handleMore}> learn more</button>

      </div>   
    </div>
  
  )
}

export default BookItem
  