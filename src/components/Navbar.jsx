import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo">Purva Pratapwar</Link>
                <div className="navbar-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;