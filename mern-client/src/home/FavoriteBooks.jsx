import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5173/all-books")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <BookCard books={books} headline="Best Seller Books" />
        </div>
    );
}

export default FavoriteBooks;
