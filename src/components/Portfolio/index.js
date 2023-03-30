import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import Animation from "../Animation/Animation";
import { portfolio } from "../../data/portfolio";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  console.log(portfolio);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              {port.title}
              <br />
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />

              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  Abrir
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <Animation
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
