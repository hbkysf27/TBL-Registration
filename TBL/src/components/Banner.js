import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "TBL Registration",
    "Badminton Championship",
    "Smash & Dash Community 2023",
  ];
  const handleRegisterClick = () => {
    window.location.hash = "connect"; // Update URL hash to #connect
  };
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 4)
      : fullText.substring(0, text.length + 4);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to TBL Registration</span>
                  <h1>
                    {`Hello !!!`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "TBL Registration", "Badminton Championship", "Smash & Dash Community 2023" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Smash & Dash Community Championship 2022 will consist of 5
                    clubs taking part with 3 category's as Men's, Women's and
                    Mixed Respectively. <br />
                    <br />
                    Date - 12th November, 2022 Time - 8.30am onwards Venue -
                    Mercantile Badminton Court.
                    <br />
                    <br /> Each club is entitled to register 6 teams for each
                    category, the same players registered for Men's and Women's
                    can register for Mixed as well. <br />
                    <br />
                    Registration fee per team will be 1000/-, 500/- per player
                    (Note - If a player is playing for two category's they are
                    entitled to a registration fee of 1000/-)
                    <br />
                    <br /> Clubs allowed to register for Smash & Dash Community
                    Championship 2022 are as follows, <br />1 - Rotaract Club of
                    Colombo Mid Town <br />
                    2- Rotaract Club of Colombo North
                    <br /> 3- Rotaract Club of Colombo Uptown <br />
                    4- Rotaract Club of Battaramulla
                    <br /> 5- Rotaract Club of Colombo Heritage
                    <br /> 6- Rotaract Club of Pearl Island <br />
                    7- Rotaract Club of Cinnamon
                    <br />
                    8- Rotaract Club of Colombo West <br />
                    9- Rotaract Club of Colombo Mid city <br />
                    10- Rotaract club of Colombo Reconnections
                  </p>
                  <button onClick={handleRegisterClick}>
                    Register Now <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
