import React, { useEffect, useState } from 'react';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5173/all-books")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            favoritebooks
        </div>
    );
}

export default FavoriteBooks;
