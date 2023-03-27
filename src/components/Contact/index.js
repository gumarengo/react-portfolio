import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Animation from "../Animation/Animation";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fa4kgvg",
        "template_sroacom",
        refForm.current,
        "GzJLV2BrKURRcJ5ZQ"
      )
      .then(
        () => {
          alert("Mensagem enviada com Sucesso!");
          window.location.reload(false);
        },
        () => {
          alert("Falha ao enviar, tente novamente");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animation
              letterClass={letterClass}
              strArray={[
                "E",
                "n",
                "t",
                "r",
                "e",
                " ",
                "e",
                "m",
                " ",
                "c",
                "o",
                "n",
                "t",
                "a",
                "t",
                "o",
              ]}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic at
            aspernatur, repellendus pariatur nam commodi ad dolores placeat,
            nihil cupiditate minus! Nam quod consectetur dolores dolore
            doloremque eligendi necessitatibus sapiente!
            {/* I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. */}
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nome" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Assunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Digite sua Mensagem"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Gustavo Marengo,
          <br />
          Brazil,
          <br />
          Sorocaba - SP
          <br />
          <span>gu_marengo@hotmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-23.528831, -47.4751877]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-23.528831, -47.4751877]}>
              <Popup>Gustavo mora aqui, venha tomar um café :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  );
};

export default Contact;
