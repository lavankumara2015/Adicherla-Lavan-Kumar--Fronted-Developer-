import React, { useState } from "react";
import "./frequently.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        <span>{isOpen ? "-" : "+"}</span>
        <h3>{question}</h3>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = useState(null); 
  const faqs = [
    {
      question: "What is EthAi?",
      answer:
        "EthAi is an AI-driven platform that provides insights into Ethereum market trends.",
    },
    {
      question: "How can EthAi help me as a Trader?",
      answer:
        "EthAi helps traders by analyzing market patterns, tracking smart money flows, and providing predictive analysis.",
    },
    {
      question: "Who can use EthAi?",
      answer:
        "Traders, investors, and anyone looking for Ethereum market insights can use EthAi.",
    },
    {
      question: "How does EthAi track smart money flow?",
      answer:
        "EthAi tracks smart money flows by monitoring wallet transactions and large investments on the Ethereum network.",
    },
    {
      question: "How does EthAi ensure data security?",
      answer:
        "EthAi ensures data security through encryption, secure APIs, and robust privacy policies.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="faq-mainContainer">
      <div>
        <h1 className="text-white">Frequently Asked Questions</h1>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
    <div className="dApp-container">
      <div className="dApp-container__inner">
        <p className="text-white text-[2.5rem] pb-8 font-[500]">Explore Our <span className="text-[#62F0FE] dappClass">dApp</span></p>
        <p className="text-[#B0FAFFB2] pb-8 font-[200]">
        EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
        </p>
        <button>Open dApp</button>
      </div>

    </div>

    </>
    
  );
};

export default FrequentlyAsked;
