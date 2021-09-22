import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed ='top' expand='sm' bg='light' variant='light'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/myProjects'>Projects</Nav.Link>
                                <Nav.Link href='/aboutMe'>About</Nav.Link>
                                <Nav.Link href='/contactInfo'>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation ; 