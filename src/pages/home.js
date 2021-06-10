import {Link} from 'react-router-dom';

export default function Home() {
    return (
      <div className="home-page">
        <h1>Landing page</h1>
        <Link to="/signup">Sign up</Link>
      </div>
    )
}