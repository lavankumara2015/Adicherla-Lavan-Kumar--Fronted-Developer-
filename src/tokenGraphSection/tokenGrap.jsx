import React from 'react';
import "./tokenGrap.css";

function TokenGrap() {
  return (
    <div className='TokenGraph-mainContainer'>
      <video
  className="backgroundVideo"
  src="./assets/-b73b-41ed-85be-06b5992f5f11.mov"
  autoPlay
  loop
  muted
>
  <source src="./assets/-b73b-41ed-85be-06b5992f5f11.mov" type="video/mp4" />
</video>
      <h1 className='text-white'>Tokenomics</h1>
      <img className='frameFront' src="./assets/Frame 43100.png" alt="frame" />
      <img className='frameFront2' src="./assets/svss.png" alt="frame" />
    </div>
  );
}

export default TokenGrap;
