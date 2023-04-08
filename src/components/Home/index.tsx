import "./index.scss";
import LogoTitle from "../../assests/images/logo-g.png";
import LogoTitle2 from "../../assests/images/logo-m.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Animation from "../Animation/Animation";
import Logo from "./Logo";
import Loader from "react-loaders";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

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

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#022c43",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
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
