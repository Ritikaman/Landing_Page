import React from 'react'
import "./Footer.css";
import {FaFacebookSquare,FaInstagramSquare,FaLinkedinIn,FaTwitterSquare} from "react-icons/fa"
//import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='col-1'>
                <h3 style={{fontWeight:"bold",marginBottom:"3rem"}}>USEFUL LINKS</h3>
                <a href="/">Home</a>
                <a href="/Cars">Cars</a>
                <a href="/Team">Team</a>
                <a href="/Achievement">Achievement</a>
                <a href="/Gallery">Gallery</a>
                <a href="/Sponsors">Sponsors</a>
                <a href="ContactUS">Contact US</a>
            </div>
            <div className='col-2' style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h3 style={{fontWeight:"bold",marginBottom:"3rem"}}>NEWSLETTER</h3>
                <form>
                    <input type="text" placeholder="Your Email Address" />
                    {/* <button type="submit">SUBSCRIBE NOW</button> */}
                </form>
                <Link to="/Home"><Button style={{width:'250px'}} type="submit" variant='danger'>Subscribe Now </Button></Link>
            </div>
            <div className='col-3' style={{marginLeft:"2rem"}}>
                <h3 style={{fontWeight:"bold",marginBottom:"3rem"}}>CONTACT US</h3>
                <p>tech@iitbombayracing.org<br/>7875692712<br/>9930779212<br/>IIT Bombay,Powai,400063,India</p>
                <div className='social-icons'>
    <a href="https://www.facebook.com/iitbracing/" target="_blank" rel="noopener noreferrer"><i><FaFacebookSquare/></i></a>
    <a href="https://www.instagram.com/iitbombayracing/?hl=en" target="_blank" rel="noopener noreferrer"><i><FaInstagramSquare/></i></a>
    <a href="https://www.linkedin.com/company/iit-bombay-racing?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i><FaLinkedinIn/></i></a>
    <a href="https://twitter.com/IITB_Racing" target="_blank" rel="noopener noreferrer"><i><FaTwitterSquare/></i></a>
</div>

            </div>
        </div>
        </>
    )
}

export default Footer
