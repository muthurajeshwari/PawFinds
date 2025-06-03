import React, { useState } from "react";
import "./about.css";
import tipsData from "../tipsData.json";

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="section-heading">
        <h1>Excited to get a pet, but still confused?</h1>
      </div>
      <section className="tips">
        {tipsData.tips.map((tip, index) => (
          <div className="tips-card" key={index}>
            {activeIndex === index ? (
              <div className="tip-content">{tip.content}</div>
            ) : (
              <img src={tip.img} alt="" className="pics" />
            )}
            <button className="btn" onClick={() => setActiveIndex(index)}>
              {tip.title}
            </button>
          </div>
        ))}
      </section>
      <div className="section-heading">
        <h1>Why PawFinds?</h1>
      </div>

      <section className="features">
        <div className="feature-cards">
          {tipsData.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img
                src={feature.img}
                alt={feature.title}
                className="feature-pics"
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
