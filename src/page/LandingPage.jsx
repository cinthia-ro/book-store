import React from 'react';
import backgroundImage from '../assets/background.jpeg';
import BookList from '../components/BookList'; 
import Button from '../components/Button';


const LandingPage = () => {
 
  return (
    <div>
<div
       className="h-[60vh] bg-cover bg-center flex items-center justify-center object-contain text-center  "
       style={{ backgroundImage: `url(${backgroundImage})` }}
    >
          <div className="absolute inset-0 bg-black opacity-70 h-[60vh]"></div>
        
        <div className='text-white relative'>
      <h1 className=" text-6xl font-bold text-green-600 ">Impact  book store</h1>
      <p className='w-[50vw] mt-8'> Discover a world of knowledge, inspiration, and adventure with my book! Whether you're looking to expand your mind, explore new ideas, or simply enjoy a great read, this book has something for you. Don’t miss out—grab your copy today and experience the journey firsthand!</p>
      <div className='mt-10'>
      <Button buttonTitle='Order Now'/> 
      </div>
   
    </div>
    </div> 
    
    <BookList />
     </div>
  );
};

export default LandingPage;