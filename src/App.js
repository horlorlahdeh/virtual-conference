import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Pricing from './pages/Pricing';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Blog from './pages/Blog';

function App() {
  return (
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/schedule' component={Schedule} />
          <Route exact path='/speakers' component={Speakers} />
          <Route exact path='/blog' component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
