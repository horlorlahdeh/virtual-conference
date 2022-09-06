import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Speakers from './pages/Speakers';

import Schedule from './pages/Schedule';
import Blog from './pages/Blog';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Register from './pages/Register';
import Template from './pages/Template';
import Error from './pages/Error'; 
import WelcomeRoom from './pages/WelcomeRoom'; 

function App() {
  return (
    <div className=''>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} /> 
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/speakers' component={Speakers} />

          <Route exact path='/landing' component={Landing} />
          <Route exact path='/schedule' component={Schedule} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/error' component={Error} />
          <Route exact path='/welcome-room' component={WelcomeRoom} />
          <Route exact path='/*' component={Template} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
