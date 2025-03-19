import React, { useState } from 'react'
import book_1 from '../assets/book1.jpg'
import Button from './Button'
import BookItem from './BookItem'
import { BookData } from '../data/BookData'
const BookList = () => {
 
  
  return (
    <div className='mt-8 text-gray-800 px-20'>
        <h1 className='font-semibold text-5xl '>Our Book</h1>
      <div className='grid grid-cols-2 mt-16 pb-14'>{
        BookData.map((book) =>
      (<BookItem
      key={book.id}
      id= {book.id}
      bookTitle={book.bookTitle}
      author={book.author}
      price={book.price}
      book_Image={book.bookImage}
      
      />


      ))}
        </div>
     
    </div>
  )
}

export default BookList
