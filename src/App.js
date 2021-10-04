
import './App.css';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        {/* <Route path='/details/:id'>
            <Details></Details>
          </Route> */}
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
