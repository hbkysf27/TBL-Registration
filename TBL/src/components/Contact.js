import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./contact.css";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({});

  const [user, setUser] = useState({
    clubname: "",
    cluboruni: "",
    category: "",
    player1: "",
    phone1: "",
    nic1: "",
    email1: "",
    player2: "",
    phone2: "",
    nic2: "",
    email2: "",
  });

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
    if (!!errors[field]) setErrors({ ...errors, [field]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Register NBL"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get Yourself Registered</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <select
                          name="cluboruni"
                          id="cluboruni"
                          required
                          onChange={(e) =>
                            onFormUpdate("cluboruni", e.target.value)
                          }
                          value={formDetails.category}
                        >
                          <option value="">Select Club/Uni</option>
                          <option value="RotractClub">Rotract Club</option>
                          <option value="Uni">Univeristy</option>
                        </select>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Name Of the Rotaract Club/ University"
                          required
                          onChange={(e) =>
                            onFormUpdate("clubname", e.target.value)
                          }
                          value={formDetails.clubname}
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select
                          name="category"
                          id="category"
                          required
                          onChange={(e) =>
                            onFormUpdate("category", e.target.value)
                          }
                          value={formDetails.category}
                        >
                          <option value="">Select Playing category</option>
                          <option value="mens">Mens</option>
                          <option value="womens">Womens</option>
                          <option value="mixed">Mixed</option>
                        </select>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          required
                          type="text"
                          placeholder="Player 1"
                          onChange={(e) =>
                            onFormUpdate("player1", e.target.value)
                          }
                          value={formDetails.player1}
                          maxLength={20}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          placeholder="Player 1 Phone Number"
                          maxLength={12}
                          onChange={(e) =>
                            onFormUpdate("phone1", e.target.value)
                          }
                          value={formDetails.phone1}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          placeholder="Player 1 NIC Number"
                          onChange={(e) => onFormUpdate("nic1", e.target.value)}
                          value={formDetails.nic1}
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Player 1 Email"
                          onChange={(e) =>
                            onFormUpdate("email1", e.target.value)
                          }
                          value={formDetails.email1}
                          required
                          maxLength={30}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          placeholder="Player 2 Name"
                          onChange={(e) =>
                            onFormUpdate("player2", e.target.value)
                          }
                          value={formDetails.player2}
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          placeholder="Player 2 Phone Number"
                          maxLength={12}
                          onChange={(e) =>
                            onFormUpdate("phone2", e.target.value)
                          }
                          value={formDetails.phone2}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Player 2 NIC Number"
                          onChange={(e) => onFormUpdate("nic2", e.target.value)}
                          value={formDetails.nic2}
                          required
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Player 2 Email"
                          onChange={(e) =>
                            onFormUpdate("email2", e.target.value)
                          }
                          value={formDetails.email2}
                          required
                          maxLength={30}
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <button type="submit">Register</button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
