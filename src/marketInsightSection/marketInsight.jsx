import React, { useEffect } from "react";
import "./marketInsight.css";

function MarketInsight() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animatePosition"); 
          }
        });
      },
      { threshold: 0.5 }
    );

    const marketInsightSections = [
      document.querySelector('.MarketInsight__1st'),
      document.querySelector('.MarketInsight__2nd'),  
      document.querySelector('.MarketInsight__3rd'),
      document.querySelector('.MarketInsight__4th'),
      document.querySelector('.MarketInsight__5th'),
      document.querySelector('.MarketInsight__6th')

    ];

    marketInsightSections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); 
  }, []);

  
  
  return (
    <div className="MarketInsight">
      <div className="MarketInsight__main-container">
        <div className="MarketInsight__1st">
          <div>
            <img
              src="./assets/Rectangle 3.png"
              alt="code icon"
              className="codeIcon"
            />
            <img src="./assets/Rectangle 8.png" className="Rectangle8" />
            <img src="./assets/Rectangle 5.png" className="Rectangle5" />
            <img src="./assets/Rectangle 5.png" className="Rectangle4" />
            <div className="flex gap-3 angleBre">
              {" "}
              <img src="./assets/_.png" className="angleLeft" />
              <img src="./assets/_ (1).png" className="angleRight" />
            </div>
          </div>
          <h1 className="text-white">Trade Optimizer</h1>
          <p className="text-[#B0FAFFB2] text-center ">
            Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity.{" "}
          </p>
        </div>
        <div className="MarketInsight__2nd">
          <div>
            <h1 className="text-white">Market Insight</h1>
            <p className="text-[#B0FAFFB2]">
              Stay ahead of the market. Get real-time updates on market trends,
              track top traders' movements, and spot signals from key
              influencers.
            </p>
          </div>
          <div className="imageDiv">
            <img src="./assets/7AVABZyyTAliootVGguafuelpHU.svg fill (1).png" />
          </div>
        </div>
        <div className="MarketInsight__3rd">
          <img
            src="./assets/l1NtBTj8px6kzRLIscIs56ETWRE.svg fill (1).png"
            alt="code icon"
            className="codeIcon2"
          />
          <h1 className="text-white">Risk Guard </h1>
          <img src="./assets/Vector (1).png" className="riskGuardAI" />
          <p className="text-[#B0FAFFB2] text-center">
            Get alerts on market swings and potential risks before they impact
            your portfolio. This agent helps you navigate volatility and stay
            prepared for anything.
          </p>
        </div>
        <div className="MarketInsight__4th">
          <h1 className="text-white" style={{ fontSize: "2.5rem" }}>
            Our features
          </h1>
        </div>
        <div className="MarketInsight__5th">
          <div>
            <h1 className=" text-white portfolioH1">Portfolio Sync</h1>
            <p className="text-[#B0FAFFB2]">
              Easily manage your portfolio. You'll always know what you own, how
              it's performing, and where it’s headed.
            </p>
          </div>
          <div>
            <img src="./assets/Group.png" className="imageIcon3" />
          </div>
        </div>
        <div className="MarketInsight__6th">
          <div>
            <h1 className="text-white portfolioH1">Opportunity Scout </h1>
            <p className="text-[#B0FAFFB2]">
              Find exciting new projects, events and tokens that others might be
              missing. Identifying promising opportunities early, so you never
              miss out on the next big thing.
            </p>
          </div>
          <div>
            <img className="imageIcon4" src="./assets/OBJECTS.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketInsight;
