import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';


function Layout({ children }) {
  
  const location = useLocation();


  const isAboutPage = location.pathname === '/about';
  const isStorePage = location.pathname === '/store';

  return (
    <>
      <Navbar variant="dark" expand="lg" className="mb-4" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
            <Nav.Link as={Link} to="/store">STORE</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>

         
</Nav>
        </Navbar.Collapse>
     
      </Navbar>
      {(isAboutPage || isStorePage) && (
        <div className="generics-section">
          <h2 className="generics-title">The Generics</h2>
        </div>
      )}
 

      {children}
    </>
  );
}

export default Layout;