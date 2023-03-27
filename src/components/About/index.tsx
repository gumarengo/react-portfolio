import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Animation from "../Animation/Animation";
import "./index.scss";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={["S", "o", "b", "r", "e", " ", "m", "i", "m"]}
              idx={15}
            />
          </h1>
          <p>
            Como um desenvolvedor front-end altamente ambicioso, estou em busca
            de uma oportunidade desafiadora em uma empresa de TI. Estou ansioso
            para trabalhar em projetos diversificados e empolgantes com as
            tecnologias mais recentes, aprimorando minhas habilidades e
            agregando valor à equipe. Com minha paixão pela programação, estou
            confiante de que posso contribuir para o sucesso da empresa enquanto
            continuo a crescer profissionalmente. Estou pronto para assumir o
            desafio e levar minhas habilidades para o próximo nível.
          </p>
          <p>
            Sou um profissional confiante, porém tranquilo, que tem uma
            curiosidade natural pela vida e sempre busca aprimorar minhas
            habilidades de design. Com um olhar atento aos detalhes e uma
            abordagem centrada no problema, enfrento cada desafio com
            determinação e perseverança. Acredito que cada projeto oferece uma
            oportunidade única de aprendizado e aprimoramento, e estou sempre
            empenhado em melhorar minhas habilidades de design para oferecer
            soluções criativas e eficazes. Estou animado para enfrentar novos
            desafios e trabalhar em projetos que me permitam crescer pessoal e
            profissionalmente.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  );
};

export default About;
