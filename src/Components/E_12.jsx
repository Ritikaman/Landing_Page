import React from 'react';
import './E_12'; // Import CSS file
import { Button } from 'react-bootstrap';
import {Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const E_12 = () => {
  const handleImageHover = () => {
    window.open("https://sketchfab.com/3d-models/e12-first-b4c96cbfecf648b3a2fbf822df4ba37f", '_blank');
  };

  return (
    <>
    <Stack direction='horizontal' gap={3}>
    <div className="container" style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
      <div className="content" style={{display:"flex",flexDirection:"column",alignItems:"center",marginRight:"3rem",marginTop:"5rem"}}>
        <h2 style={{fontSize:"2rem"}}>"E12_First"</h2>
        <p>View 3-D Model of E12 first by IIT Bombay Racing</p>
        <Link to="https://sketchfab.com/3d-models/e12-first-b4c96cbfecf648b3a2fbf822df4ba37f"><Button style={{width:"5rem",height:"2rem",paddingBottom:'1rem'}} variant='danger'>Check</Button></Link>
      </div>
      <div className="image-container">
        <img style={{borderRadius:"3rem"}} src="https://media.sketchfab.com/models/b4c96cbfecf648b3a2fbf822df4ba37f/thumbnails/d0ffcaa08eda4e93a74bfe2c15d93e8b/ad8c0663978842048251633946b6592c.jpeg" alt="Image" onClick={handleImageHover} />
      </div>
    </div>
    </Stack>
    </>
  );
};

export default E_12;
