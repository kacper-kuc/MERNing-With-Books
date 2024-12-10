import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import AddBook from './pages/AddBook';
import BookDetails from './pages/BookDetails';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/create" element={<AddBook />} />
                <Route path="/books/:id/details" element={<BookDetails />} />
            </Routes>
        </Router>
    );
}

export default App;