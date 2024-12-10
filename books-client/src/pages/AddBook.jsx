import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, pages, isAvailable };

        axios.post('http://localhost:9999/api/books', newBook)
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a Book</h1>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author Name</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Page Count</label>
                <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
            </div>
            <div>
                <label>Is it Available?</label>
                <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBook;