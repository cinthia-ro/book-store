import React, { useState } from 'react'
import book_1 from '../assets/book1.jpg'
import Button from './Button'
import BookItem from './BookItem'
import { BookData } from '../data/BookData'
const BookList = () => {
 
  
  return (
    <div className='mt-8 text-gray-800 px-4 md:px-10 lg:px-20'>
    <h1 className='font-semibold text-4xl md:text-5xl'>Our Book</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 pb-14'>{
        BookData.map((book) =>
      (
    
      <BookItem
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
