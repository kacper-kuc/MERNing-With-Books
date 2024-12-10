import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9999/api/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const handleBorrow = () => {
        axios.delete(`http://localhost:9999/api/books/${id}`)
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    };

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>By {book.author}</p>
            <p>Page count: {book.pages}</p>
            <p>{book.isAvailable ? 'Available for borrowing' : 'Not available'}</p>
            {book.isAvailable && <button onClick={handleBorrow}>Borrow</button>}
        </div>
    );
};

export default BookDetails;