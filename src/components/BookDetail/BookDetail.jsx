import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../utility/addToDb';

const BookDetail = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const {bookId:currentBookId,image} = book;

    const handleMarkAsRead = (id) =>{
        addToStoreReadList(id)
    }


    return (
        <div className='my-12'>
            <h2>Book Detail:{bookId}</h2>
            <img className='w-46'   src={image} alt="" />
            <br />
            <button onClick={ () =>handleMarkAsRead(bookId)} className="btn btn-ghost btn-outline bg-black text-yellow-400 mr-5"> Mark as Read</button>
            <button className="btn btn-ghost bg-black text-yellow-400"> Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;

