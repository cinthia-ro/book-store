import React from 'react'
import Button from '../components/Button'
import { useParams } from 'react-router-dom';
import { BookData } from '../data/BookData';


const DetailBook = () => {
    const { id } = useParams();

    const book = BookData.find((book) => book.id === parseInt(id)); // Find the book by id
    const bookDetailsList = book.bookDetails.split('\n').filter((line) => line.trim() !== '');


  return (
    <div className='md:p-16 p-7'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
            <div>
                <img src={book.bookImage} className='w-[54%]' alt="" />

                <p className=' font-bold text-xl mt-6'> Details</p>
                <ul className='mt-3 list-disc pl-5'>
            {bookDetailsList.map((line, index) => (
              <li key={index} className='text-sm'>
                {line}
              </li>
            ))}
          </ul>

            </div>
            <div className=''>
                <p className='mt-5 font-semibold md:text-4xl text-3xl'>{book.bookTitle}</p>
                <p className='mt-5 font-semibold text-2xl text-green-600'>{book.price}</p>
                <Button buttonTitle='order now'/>
                <p className='font-bold text-3xl mt-10'> Book Overview</p>
                <p className='mt-3'>{book.bookDescription}</p>
                <p className='font-bold text-3xl mt-10'> About the author</p>
                <p className='mt-3'>{book.aboutAuthor}</p>
                

            </div>

        </div>
      
    </div>
  )
}

export default DetailBook
