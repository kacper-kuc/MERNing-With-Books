import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <Link to="/">Catalog</Link>
            <Link to="/create">Add Book</Link>
        </nav>
    </header>
);

export default Header;