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
        
        <ClimbingBoxLoader color={"#82F3A2"} loading={loading} size={30}/>
        : 
        <>
        <Container>
          <Row>
              <Header />
                <Router>
                      <Col xs={12} md={3}><Link to="/"><button className="click btn btn-outline-black col-3" type="button"> HOME</button></Link></Col>
                      <Col xs={12} md={3}><Link to="/myProjects"><button className="click btn btn-outline-black col-3" type="button">PROJECTS</button></Link></Col>
                      <Col xs={12} md={3}><Link to="/aboutMe"><button className="click btn btn-outline-black col-3 " type="button"> ABOUT</button></Link></Col>
                      <Col xs={12} md={3}><Link to="/contactInfo"><button className="click btn btn-outline-black col-3 " type="button"> CONTACT</button></Link></Col>
                  <Switch>
                    <Route path="/" exact component={Name} />
                    <Route path="/aboutMe" component={AboutMe} />
                    <Route path="/myProjects" component={MyProjects}/>
                    <Route path="/contactInfo" component={ContactInfo}/>
                  </Switch>
                </Router>
              <Footer />
          </Row>
        </Container >
        </>
      }

    </div>
  );
}
export default App;
