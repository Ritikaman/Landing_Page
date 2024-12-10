import React, { useState } from 'react';
import './Cards.css';
import { Button } from 'react-bootstrap';
const cardsData = [
  {
    id: 1,
    title: 'Electrifying Innovation',
    content: 'Our mission is to revolutionize electric mobility in India,one race at a time, with eco-friendly and high-performance electric cars'
  },
  {
    id: 2,
    title: 'Speeding Towards Excellence',
    content: 'We are on a mission to achieve excellence in Formula Student Electric racing,showcasing our cutting-edge designs on a global stage'
  },
  {
    id: 3,
    title: 'Driving India Green Revolution',
    content: 'Our mission is to revolutionize electric mobility in india, one race at a time,with eco-friendly and high-performance electric cars'
  },
  {
    id: 4,
    title: 'Engineering the Future',
    content: 'At IIT Bombay racing,we are on a mission to engineer a brighter, greener future through innovation, dedication, and teamwork.'
  }
];

const Cards = () => {
  const [showCards, setShowCards] = useState(false);

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  return (
    <>
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div style={{borderRadius:"3rem"}} key={card.id} className={`card ${showCards ? 'show' : ''} ${index < 2 ? 'two-per-row' : ''}`}>
          <h1 style={{fontWeight:"bold",marginBottom:"2rem"}}>{card.title}</h1>
          <p className="content">{card.content}</p>
        </div>
      ))}
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Button variant='warning' className="toggle-button" onMouseOver={toggleCards}>Toggle Cards</Button>
    </div>
    </>
  );
};

export default Cards;