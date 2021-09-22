import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import MyProjects from './components/MyProjects';
import Name from './components/Name';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from './components/Navigation';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false) 
      }, 1000)
  }, [])

  return (
    <div className="App">
      {
        loading ?
        
        <ClimbingBoxLoader color={"#66ff00"} loading={loading} size={30}/>
        : 
        <>
        <Container>
          <Row>
              <Header />
              <Navigation />
                <Router>
                      <Col xs={12} md={3}><Link to="/"><button className="btn btn-outline-black col-3" type="button"> HOME</button></Link></Col>
                      <Col xs={12} md={3}><Link to="/myProjects"><button className="btn btn-outline-black col-3" type="button">PROJECTS</button></Link></Col>
                      <Col xs={12} md={3}><Link to="/aboutMe"><button className="btn btn-outline-black col-3 " type="button"> ABOUT</button></Link></Col>
                      <Col xs={12} md={3}><Link to="/contactInfo"><button className="btn btn-outline-black col-3 " type="button"> CONTACT</button></Link></Col>
                  <Switch>
                    <Route path="/" exact component={Name} />
                    <Route path="/aboutMe" component={AboutMe} />
                    <Route path="/contactInfo" component={ContactInfo}/>
                    <Route path="/myProjects" component={MyProjects}/>
                  </Switch>
                </Router>
              <Footer />
          </Row>
        </Container>
        </>
      }

    </div>
  );
}
export default App;
