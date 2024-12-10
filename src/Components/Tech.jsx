import React from 'react'
//import {Stack} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Tech.css";
import { Stack } from 'react-bootstrap';
function Tech() {
    return (
      <>
      <Stack direction='horizontal' gap={5} style={{marginBottom:"3rem"}}>
      <div className="flip-card" style={{borderRadius:"1rem"}}>
  <div className="flip-card-inner" style={{borderRadius:"1rem"}}>
    <div className="flip-card-front"style={{borderRadius:"1rem"}}>
      <img 
        src="https://www.iitbracing.org/assets/a1-A-pHDCYh.jpeg" 
        alt="Avatar" 
        style={{ width: "19rem", height: "18rem", borderRadius: "1rem" ,marginTop:"0.2rem"}}
      />
    </div>
    <div className="flip-card-back">
      <h1 style={{fontWeight:"bold",marginBottom:"2rem",marginTop:"2rem"}}>EVoK</h1>
      <h3 style={{fontWeight:"bold"}}>IIT Bombay Racing</h3>
      <p>Racing Up The Ladder</p>
    </div>
  </div>
</div>
<div className="flip-card" style={{borderRadius:"1rem"}}>
  <div className="flip-card-inner" style={{borderRadius:"1rem"}}>
    <div className="flip-card-front"style={{borderRadius:"1rem"}}>
      <img 
        src="https://www.iitbracing.org/assets/a8-CX9e0vo0.jpeg" 
        alt="Avatar" 
        style={{ width: "19rem", height: "18rem", borderRadius: "1rem" ,marginTop:"0.2rem"}}
      />
    </div>
    <div className="flip-card-back">
      <h1 style={{fontWeight:"bold",marginBottom:"2rem",marginTop:"2rem"}}>EvoX</h1>
      <h3 style={{fontWeight:"bold"}}>$IIT Bombay Racing</h3>
      <p>#Racing Up The Ladder</p>
    </div>
  </div>
</div>
<div className="flip-card" style={{borderRadius:"1rem"}}>
  <div className="flip-card-inner" style={{borderRadius:"1rem"}}>
    <div className="flip-card-front"style={{borderRadius:"1rem"}}>
      <img 
        src="https://www.iitbracing.org/assets/orca-NX0OJSwW.jpeg" 
        alt="Avatar" 
        style={{ width: "19rem", height: "18rem", borderRadius: "1rem" ,marginTop:"0.2rem"}}
      />
    </div>
<div className="flip-card-back">
  <h1 style={{fontWeight:"bold",marginBottom:"2rem",marginTop:"2rem"}}>Orca</h1>
  <h3 style={{fontWeight:"bold"}}>$IIT Bombay Racing</h3>
  <p>#Racing Up The Ladder</p>
</div>
  </div>
</div>
    </Stack>
    <Stack direction='horizontal' gap={5} style={{marginBottom:"3rem"}}>
      <div className="flip-card" style={{borderRadius:"1rem"}}>
  <div className="flip-card-inner" style={{borderRadius:"1rem"}}>
    <div className="flip-card-front"style={{borderRadius:"1rem"}}>
      <img 
        src="https://www.iitbracing.org/assets/a4-BmzZ_Tp7.jpeg" 
        alt="Avatar" 
        style={{ width: "19rem", height: "18rem", borderRadius: "1rem" ,marginTop:"0.2rem"}}
      />
    </div>
    <div className="flip-card-back">
      <h1 style={{fontWeight:"bold",marginBottom:"2rem",marginTop:"2rem"}}>Evo2</h1>
      <h3 style={{fontWeight:"bold"}}>$IIT Bombay Racing</h3>
      <p>#Racing Up The Ladder</p>
    </div>
  </div>
</div>
<div className="flip-card" style={{borderRadius:"1rem"}}>
  <div className="flip-card-inner" style={{borderRadius:"1rem"}}>
    <div className="flip-card-front"style={{borderRadius:"1rem"}}>
      <img 
        src="https://www.iitbracing.org/assets/a11-DPe64DH-.jpeg" 
        alt="Avatar" 
        style={{ width: "19rem", height: "18rem", borderRadius: "1rem" ,marginTop:"0.2rem"}}
      />
    </div>
    <div className="flip-card-back">
      <h1 style={{fontWeight:"bold",marginBottom:"2rem",marginTop:"2rem"}}>Agni</h1>
      <h3 style={{fontWeight:"bold"}}>$IIT Bombay Racing</h3>
      <p>#Racing Up The Ladder</p>
    </div>
  </div>
</div>
<div className="flip-card" style={{borderRadius:"1rem"}}>
  <div className="flip-card-inner" style={{borderRadius:"1rem"}}>
    <div className="flip-card-front"style={{borderRadius:"1rem"}}>
      <img 
        src="https://www.iitbracing.org/assets/prithvi2-CFrGDkT2.png" 
        alt="Avatar" 
        style={{ width: "19rem", height: "18rem", borderRadius: "1rem" ,marginTop:"0.2rem"}}
      />
    </div>
<div className="flip-card-back">
  <h1 style={{fontWeight:"bold",marginBottom:"2rem",marginTop:"2rem"}}>Prithvi 2</h1>
    <h3 style={{fontWeight:"bold"}}>$IIT Bombay Racing</h3>
    <p>#Racing Up The Ladder</p>
</div>
  </div>
</div>
    </Stack>
      </>
    )
}

export default Tech
