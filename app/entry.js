import ReactGA from 'react-ga';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, withRouter
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import About from './views/About';
import Blog from './views/Blog';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

// Blog posts
import HelloWorld from './views/posts/blogs/HelloWorld'
import onConsciousness from './views/posts/blogs/onConsciousness'
//import onVeganism from './views/posts/blogs/onVeganism'

// Project posts
import FourPlayerChess from './views/posts/projects/FourPlayerChess'
import Mood from './views/posts/projects/Mood'
import Hopfield from './views/posts/projects/Hopfield'
import CCNA2 from './views/posts/projects/CCNA2'
import RLHFOSoccer from './views/posts/projects/RLHFOSoccer'
import MLPA1 from './views/posts/projects/MLPA1'
import MLPA2 from './views/posts/projects/MLPA2'
import MScDissertation from './views/posts/projects/MScDissertation'
import AvionicsCapstone from './views/posts/projects/AvionicsCapstone'
import BEngThesis from './views/posts/projects/BEngThesis'

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

ReactGA.initialize('UA-147410230-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={withRouter(Index)} />
      <Route path="/about" component={About} />
      <Route exact path="/blog" component={withRouter(Blog)} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      {/*BLOG POSTS*/}
      <Route path="/blog/helloworld" component={HelloWorld} />
      <Route path="/blog/consciousness" component={onConsciousness} />
      {/*<Route path="/blog/onVeganism" component={onVeganism} />*/}
      {/*PROJECT POSTS*/}
      <Route path="/project/fourplayerchess" component={FourPlayerChess} />
      <Route path="/project/moodanddecisionmaking" component={Mood} />
      <Route path="/project/hopfield" component={Hopfield} />
      <Route path="/project/ccnA2" component={CCNA2} />
      <Route path="/project/rl-hfo-soccer" component={RLHFOSoccer} />
      <Route path="/project/mlpA1" component={MLPA1} />
      <Route path="/project/mlpA2" component={MLPA2} />
      <Route path="/project/dissertation" component={MScDissertation} />
      <Route path="/project/avionics-capstone" component={AvionicsCapstone} />
      <Route path="/project/aerospace-thesis" component={BEngThesis} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
