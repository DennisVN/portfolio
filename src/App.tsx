import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects';
import Name from './components/Name';


function App() {

  return (
    <>
      <Header />
      <Router>
            <Link to="/"><button className="btn btn-outline-black col-3" type="button"> HOME</button></Link>
            <Link to="/myProjects"><button className="btn btn-outline-black col-3" type="button">PROJECTS</button></Link>
            <Link to="/aboutMe"><button className="btn btn-outline-black col-3 " type="button"> ABOUT</button></Link>
            <Link to="/contactInfo"><button className="btn btn-outline-black col-3 " type="button"> CONTACT</button></Link>
        <Switch>
          <Route path="/" exact component={Name} />
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
