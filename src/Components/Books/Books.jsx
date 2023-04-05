import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BooksCard from './BooksCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {

        const navigation = useNavigation()
        console.log(navigation.state)
        if (navigation.state === 'loading') {
            return <LoadingSpinner />
        }

    const { books } = useLoaderData()

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20' >

            <div className='grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 '>
                {
                    books.map(book => (
                        <BooksCard key={book.isbn13} book={book}></BooksCard>

                    ))}

            </div>

        </div>
    );
};

export default Books;