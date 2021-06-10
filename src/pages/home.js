import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-page">
            <h1>Landing page</h1>
            <ul className="top-nav">
                <li className="top-nav-item">
                    <Link to="/signup">Sign up</Link>
                </li> 
                <li className="top-nav-item">
                    <Link to="/login">Login</Link>
                </li>
                <li className="top-nav-item">
                    <Link to="/products">Product</Link>
                </li>
            </ul>
        </div>
    );
}