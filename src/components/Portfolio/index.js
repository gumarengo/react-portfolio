import { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import Animation from "../Animation/Animation";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  console.log(portfolioData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
        <div>BATATA</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
