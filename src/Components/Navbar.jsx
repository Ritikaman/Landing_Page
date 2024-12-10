import React from 'react'
import {Container,Nav,Navbar,Stack} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Navbar.css";
function navbar() {
    return (
      <Navbar bg="dark" expand="lg" style={{ height: '5rem' }}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className='link-light text-decoration-none'>
            <img src="https://www.iitbracing.org/whitelogo.png" alt="" style={{ height: "4rem",marginLeft:"2rem" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* <Nav className="ml-auto" style={{marginLeft:"30rem"}}>
            <Stack direction='horizontal' gap={3}>
              <Link to="/" className='link-light text-decoration-none'>Home</Link>
              <Link to="Cars" className='link-light text-decoration-none'>Cars</Link>
              <Link to="/Team" className='link-light text-decoration-none'>Team</Link>
              <Link to="/Achievements" className='link-light text-decoration-none'>Achievements</Link>
              <Link to="/Gallery" className='link-light text-decoration-none'>Gallery</Link>
              <Link to="/Sponsors" className='link-light text-decoration-none'>Sponsors</Link>
              <Link to="/ContactUs" className='link-light text-decoration-none'>Contact Us</Link>
            </Stack>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default navbar
