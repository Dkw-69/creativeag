import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import BlogPosts from './components/BlogPosts'
import SingleBlogPost from './components/SingleBlogPost'
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/blog' component={BlogPosts} />
        <Route exact path='/blog/:slug' component={SingleBlogPost} />
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
