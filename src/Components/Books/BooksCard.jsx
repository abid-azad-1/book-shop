import React from 'react';
import { Link } from 'react-router-dom';

const BooksCard = ({ book }) => {
    return (
        <Link to={`../book/${book.isbn13}`}>  <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={book.image} alt="" className='object-cover w-full h-56 md:h-64 xl:h-80' />
            <div className='bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col'>
                <p>{book.title}</p>
                <p>{book.subtitle}</p>
                <br />
                <p className='mt-auto'>{book.price}</p>
            </div>
        </div></Link>
    );
};

export default BooksCard;