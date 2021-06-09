import './App.css';
import Signup from './pages/signup'
import Login from './pages/login'
import {Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Landing page</h1>
      <Link to="/signup" className="route-link">Sign up</Link>
      <Route path="/signup" component={Signup} />
      <Link to="/login" className="route-link">Login</Link>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
