import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreReadList } from '../../utility/addToDb';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();
   
    const ListedBooks = () =>{
        const allBooks= useLoaderData();

        useEffect( () =>{
            const storedReadList = getStoreReadList();
            const storedReadListInt = storedReadList.map(id => parseInt(id));
            console.log(storedReadList, storedReadListInt, allBooks);

            const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

            setReadList(readBookList);
        },[])
    }

    return (
        <div>
            <h2>Listed Books</h2>
            <br />
            <br />
            <button className='bg-red-500 p-2 rounded-xl mr-3 mb-3'>Read List</button>
            <button>WishList</button>
        </div>
    );
};

export default ListedBooks;

