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

// Project posts
import FourPlayerChess from './views/posts/projects/FourPlayerChess'
import Mood from './views/posts/projects/Mood'
import Hopfield from './views/posts/projects/Hopfield'
import CCNA2 from './views/posts/projects/CCNA2'
import RLHFOSoccer from './views/posts/projects/RLHFOSoccer'
import MLPA1 from './views/posts/projects/MLPA1'
import MLPA2 from './views/posts/projects/MLPA2'

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

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
      {/*PROJECT POSTS*/}
      <Route path="/project/fourplayerchess" component={FourPlayerChess} />
      <Route path="/project/moodanddecisionmaking" component={Mood} />
      <Route path="/project/hopfield" component={Hopfield} />
      <Route path="/project/ccnA2" component={CCNA2} />
      <Route path="/project/rl-hfo-soccer" component={RLHFOSoccer} />
      <Route path="/project/mlpA1" component={MLPA1} />
      <Route path="/project/mlpA2" component={MLPA2} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
