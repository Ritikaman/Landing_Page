import React, { useState } from 'react';
import './Img.css';
import { Button } from 'react-bootstrap';
const images = [
  {
    id: 1,
    src: 'https://www.iitbracing.org/redbull.png',
    Name:"Mechanical",
    About:"",
    alt: 'Image 1',
    title: '!IIT Bombay Racing.',
    description: '[Driving Innovation,Powering Sustainability:IITB Racing]',
    buttonLabel: 'Next'
  },
  {
    id: 2,
    src: 'https://www.iitbracing.org/car.svg',
    Name:"Organizational",
    About:"",
    alt: 'Image 2',
    title: '!IIT Bombay Racing.',
    description: '[Driving Innovation,Powering Sustainability:IITB Racing]',
    buttonLabel: 'Next'
  },
  {
    id: 3,
    src: 'https://www.iitbracing.org/assets/image-2-C8poHMFX.png',
    Name:"Driverless",
    About:"",
    alt: 'Image 2',
    title: '!IIT Bombay Racing.',
    description: '[Driving Innovation,Powering Sustainability:IITB Racing]',
    buttonLabel: 'Next'
  },
  {
    id: 4,
    src: 'https://www.iitbracing.org/assets/image-3-DL8wGSR2.png',
    Name:"Electrical",
    About:"",
    alt: 'Image 2',
    title: '!IIT Bombay Racing.',
    description: '[Driving Innovation,Powering Sustainability:IITB Racing]',
    buttonLabel: 'Next'
  },
];

const Img = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="image-container">
        <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
        <h3 style={{marginLeft:"105px",fontWeight:"bold",fontSize:"3rem",marginTop:"1rem"}}>{images[activeIndex].Name}</h3>
        <h4 style={{marginLeft:"110px"}}>{images[activeIndex].About}</h4>
      </div>
      <div className="content-container" style={{marginBottom:"4rem"}}>
        <h1 style={{fontWeight:"bold",fontSize:"4rem"}}>{images[activeIndex].title}</h1>
        <p style={{fontSize:"1.2rem"}}>{images[activeIndex].description}</p>
        <Button variant='warning' onMouseOver={handleNextImage}>{images[activeIndex].buttonLabel}</Button>
      </div>
    </div>
  );
};

export default Img;
