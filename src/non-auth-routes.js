import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Signup from './pages/signup'
import Login from './pages/login'


export default function UnAuthenticatedRoutes() {
    return (
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Router>
    )
}