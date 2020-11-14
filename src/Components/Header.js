import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="mainHeader">
            <h1>Logo</h1>

            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
