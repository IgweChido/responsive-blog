import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Career from "./components/Career";


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <div>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route  path="/CreateBlog">
             <CreateBlog/>
          </Route>
          <Route path="/:index">
             <BlogDetails/>
          </Route>
          <Route path="/Contact">
             <Contact/>
          </Route>
          <Route path="/Career">
             <Career/>
          </Route>
         
        </Switch>
        
      </div>
      
    </div>
    </Router>
    
  );
}

export default App;
