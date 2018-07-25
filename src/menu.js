import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => (<div>Loading...</div>);

const Home = Loadable({
  loader: () => import('./components/contactInfo/Contact'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./components/contactInfo/PhoneNumber'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);