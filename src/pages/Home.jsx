import React from 'react'
import "./Home.css";
import Cards from '../Components/Cards.jsx';
import Img from "../Components/Img.jsx";
import Team from '../Components/Team.jsx';
import Tech from '../Components/Tech.jsx';
import E_12 from '../Components/E_12.jsx';
import Achievement from '../Components/Achievement.jsx';
//import Legacy from '../Components/Legacy.jsx';
function Home() {
    return (
        <>
        <div style={{marginTop:"1rem"}}>
          <Img/>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center",marginTop:"2rem" }}>
          <h1 style={{fontWeight:"bold",fontSize:"4rem"}}>Our Mission</h1>
          <h6>[Racing Up The Ladder]</h6>
        </div>
        <div style={{marginBottom:"5rem"}}>
          <Cards/>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"2rem",flexDirection: "column",alignItems:"center"}}>
          <h1 style={{fontWeight:"bold",fontSize:"4rem"}}>The Team</h1>
          <h6>[The Stars of IIT Bombay Racing Club]</h6>
        </div>
        <div style={{marginBottom:"4rem"}}>
          <Team/>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h1 style={{fontSize:"3rem",fontWeight:"bold"}}>Driving Organizational and Technical Excellence</h1>
          <h6>[WHERE INNOVATION MEETS EXCELLENCE]</h6>
          <h6>Our team has both Organizational and technical 
          divisions which are further divided into mechanical, electrical and driverless subdivisions</h6>
        </div>
        <div style={{marginTop:"4rem",marginBottom:"3rem",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <Tech/>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
          <h1 style={{fontSize:"4rem",fontWeight:"bold"}}>E12_First 3-D Model</h1>
          <p>[Racing Up The Ladder]</p>
        </div>
        <div style={{marginBottom:"5rem"}}>
          <E_12/>
        </div>
        <div style={{display:'flex',justifyContent:"center",flexDirection:"column",alignItems:'center'}} >
          <h1 style={{fontSize:"4rem",fontWeight:"bold"}}>Our Achievement</h1>
          <p>[INNOVATIVE,COMPETITIVE,EDUCATIONAL]</p>
        </div>
        <div style={{marginBottom:"5rem"}}>
          <Achievement/>
        </div>
         <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          {/* <h1 style={{fontSize:"4rem",fontWeight:"bold"}}>Our Legacy</h1>
          <h6>Click To Know The Legacy Of Our Cars</h6> */}
         {/* <p>[OUR CARS]</p> */}
        </div> 
        {/* <div>
          <Legacy/>
        </div> */}
        </>
    )
}

export default Home
