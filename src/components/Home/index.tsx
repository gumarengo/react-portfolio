import "./index.scss";
import LogoTitle from "../../assests/images/logo-g.png";
import LogoTitle2 from "../../assests/images/logo-m.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Animation from "../Animation/Animation";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["u", "s", "t", "a", "v", "o"];
  const lastNameArray = ["a", "r", "e", "n", "g", "o"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _09`}>l</span>
            <span className={`${letterClass} _10`}>á,</span>
            <span className={`${letterClass} _11`}> </span>
            <span className={`${letterClass} _12`}>s</span>
            <span className={`${letterClass} _13`}>o</span>
            <span className={`${letterClass} _14`}>u</span>
            <br />
            <img src={LogoTitle} alt="logo" />
            <Animation
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />{" "}
            <img className="last-name" src={LogoTitle2} alt="logo2" />
            <Animation
              letterClass={letterClass}
              strArray={lastNameArray}
              idx={21}
            />
            <br />
            <Animation letterClass={letterClass} strArray={jobArray} idx={27} />
          </h1>
          <h2>Frontend Developer / JavaScript / React</h2>
          <Link to="/contact" className="flat-button">
            Entre em Contato
          </Link>
        </div>
        <Logo />
      </div>
      <Loader active type="pacman" />
    </>
  );
};

export default Home;
