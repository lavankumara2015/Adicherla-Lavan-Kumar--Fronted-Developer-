import React from 'react';
import "./tokenGrap.css";

function TokenGrap() {
  return (
    <div className='TokenGraph-mainContainer'>
      <video
        className='backgroundVideo'
        src="./assets/WhatsApp Video 2024-10-15 at 4.05.38 PM.mp4"
        autoPlay
        loop
        muted
      />
      <h1 className='text-white'>Tokenomics</h1>
      <img className='frameFront' src="./assets/Frame 43100.png" alt="frame" />
      <img className='frameFront2' src="./assets/svss.png" alt="frame" />
    </div>
  );
}

export default TokenGrap;
