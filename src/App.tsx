import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects';

function App() {
  return (
    <>
      <Router>
          <Link to="/"><button className="btn btn-outline-light col-12 p-2" type="button"> homepage (minigame ?)</button></Link>
          <Link to="/myProjects"><button className="btn btn-outline-light col-12 p-2" type="button"> my projects</button></Link>
          <Link to="/contactInfo"><button className="btn btn-outline-light col-12 p-2" type="button"> contact info</button></Link>
          <Link to="/aboutMe"><button className="btn btn-outline-light col-12 p-2" type="button"> about me</button></Link>
        <Switch>
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/contactInfo" component={ContactInfo}/>
          <Route path="/myProjects" component={MyProjects}/>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
