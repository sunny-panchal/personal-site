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
      <Route path="/blog/helloworld" component={HelloWorld} />
      <Route path="/project/fourplayerchess" component={FourPlayerChess} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
