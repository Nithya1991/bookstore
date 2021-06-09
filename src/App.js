import './App.css';
import Signup from './pages/signup'
import {Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Landing page</h1>
      <Link to="/signup">Sign up</Link>
      <Route path="/signup" component={Signup} />
    </div>
  );
}

export default App;
