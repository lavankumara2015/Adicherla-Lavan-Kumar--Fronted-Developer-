import React from "react";
import "./aboutEth.css";

function AboutEth() {
  return (
    <div className="aboutEth-container">
      <div>
        <h1 className=" pt-10 text-4xl font-semibold text-center text-white">
          About EthAi
        </h1>
        <p className="text-[#B0FAFFB2] text-center pt-5 ethAiClass">
          At EthAi, we’re all about making crypto trading easier and more
          intuitive. We provide tools <br /> that help traders keep up with all
          new market trends, track top traders’ movements.
        </p>
        <div className="text-center p-8">
          <button className="text-white">Read more</button>
        </div>
      </div>
      <div className="aboutEth-innerContainer">
  <div className="aboutEth-innerContainer__video-Container">
    <video
      className="aboutEth-innerContainer__video"
      src="./assets/-9842-4434-816a-ae0df77dfb21.mp4"
      autoPlay
      loop
      muted
    />
    <div className="aboutEth-innerContainer__content">
      <div>
        <img src="./assets/graph.png"/>
        <h1 className="text-white">Stay Ahead</h1>
         <p className="text-[#B0FAFFB2]">No more guesswork—get clear, trustable insights.</p>
      </div>
      <div>
        <img src="./assets/wallet.png"/>
        <h1 className="text-white">Know Your Assets</h1>
         <p className="text-[#B0FAFFB2]">Always stay on top of how your investments are performing.</p>
      </div>
      <div>
        <img src="./assets/Tools.png"/>
        <h1 className="text-white">Simple, Not Overwhelming</h1>
         <p className="text-[#B0FAFFB2]">Our tools are designed to make complex market analysis easy to understand and act on.</p>
      </div>
      <div>
        <img src="./assets/Future Technology.png"/>
        <h1 className="text-white">Future-Proof</h1>
         <p className="text-[#B0FAFFB2]">We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
      </div>

    </div>
    <video
      className="aboutEth-innerContainer__video2"
      src="./assets/-9842-4434-816a-ae0df77dfb21.mp4"
      autoPlay
      loop
      muted
    />
  </div>
</div>

    </div>
  );
}

export default AboutEth;
