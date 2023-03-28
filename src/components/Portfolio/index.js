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

  //   const renderPortfolio = (portfolio) => {
  //     return (
  //       <div className="images-container">
  //         {portfolio.map((port, i) => {
  //           return (
  //             <div className="image-box" key={i}>
  //               <img
  //                 src={port.cover}
  //                 alt="project image"
  //                 className="portfolio-image"
  //               />
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   };

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              {port.description}
              <br />
              <img
                src={port.cover}
                // "https://t.ctcdn.com.br/essK16aBUDd_65hp5umT3aMn_i8=/400x400/smart/filters:format(webp)/i606944.png"
                className="portfolio-image"
                alt="portfolio"
              />

              {/* <div className="content">
                                <p className="title">{port.name}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >View</button>
                            </div> */}
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
        <h1>GUSTAVO TESTE</h1>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
