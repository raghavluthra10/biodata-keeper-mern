import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
    <Router>

    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route  path='/contact' component={Contact} />
        <Route  path='/login' component={Login} />
        <Route  path='/signup' component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
