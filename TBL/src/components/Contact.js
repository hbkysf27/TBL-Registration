import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./contact.css";
import axios from "axios";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
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
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({});
  const formEle = document.querySelector("form");

  // const [user, setUser] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
    if (!!errors[field]) setErrors({ ...errors, [field]: null });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "https://script.google.com/macros/s/AKfycbxGNJmKm2MEb_ZJY7ERl6enbKB0AIVp6knDeajdzGpV53EKDeMKKjQcOznVTcYHkxRF/exec",
  //       formDetails
  //     );
  //     setStatus({ message: response.data.message, success: true });
  //     if (response.data.message === "Form data submitted successfully") {
  //       console.log(response.data.message);
  //       console.log("Clearing form fields...");
  //       setFormDetails({}); // Clear the form fields
  //       console.log("Form fields cleared.");
  //     }
  //   } catch (error) {
  //     setStatus({ message: "Failed to submit form", success: false });
  //   }
  // };

  function submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxGNJmKm2MEb_ZJY7ERl6enbKB0AIVp6knDeajdzGpV53EKDeMKKjQcOznVTcYHkxRF/exec",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => {
      if (response.status === 200) {
        console.log("Form submitted successfully");
        console.log("Clearing form fields...");
        setFormDetails({}); // Clear the form fields
        console.log("Form fields cleared.");
        setStatus({ message: "Form submitted successfully", success: true });
      } else {
        console.log("Failed to submit form");
        setStatus({ message: "Failed to submit form", success: false });
      }
    });
  }

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

                  <form onSubmit={(e) => submit(e)} className="form">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <select
                          name="cluboruni"
                          id="cluboruni"
                          required
                          onChange={(e) =>
                            onFormUpdate("cluboruni", e.target.value)
                          }
                          value={formDetails.cluboruni || ""}
                        >
                          <option value="">Select Club/Uni</option>
                          <option value="RotractClub">Rotract Club</option>
                          <option value="Uni">Univeristy</option>
                        </select>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="clubname"
                          id="clubname"
                          placeholder="Name Of the Rotaract Club/ University"
                          required
                          onChange={(e) =>
                            onFormUpdate("clubname", e.target.value)
                          }
                          value={formDetails.clubname || ""}
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
                          value={formDetails.category || ""}
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
                          name="player1"
                          id="player1"
                          onChange={(e) =>
                            onFormUpdate("player1", e.target.value)
                          }
                          value={formDetails.player1 || ""}
                          maxLength={20}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          required
                          name="phone1"
                          id="phone1"
                          placeholder="Player 1 Phone Number"
                          maxLength={12}
                          onChange={(e) =>
                            onFormUpdate("phone1", e.target.value)
                          }
                          value={formDetails.phone1 || ""}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="nic1"
                          id="nic1"
                          required
                          placeholder="Player 1 NIC Number"
                          onChange={(e) => onFormUpdate("nic1", e.target.value)}
                          value={formDetails.nic1 || ""}
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="email1"
                          id="email1"
                          placeholder="Player 1 Email"
                          onChange={(e) =>
                            onFormUpdate("email1", e.target.value)
                          }
                          value={formDetails.email1 || ""}
                          required
                          maxLength={30}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="player2"
                          id="player2"
                          required
                          placeholder="Player 2 Name"
                          onChange={(e) =>
                            onFormUpdate("player2", e.target.value)
                          }
                          value={formDetails.player2 || ""}
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="phone2"
                          id="phone2"
                          required
                          placeholder="Player 2 Phone Number"
                          maxLength={12}
                          onChange={(e) =>
                            onFormUpdate("phone2", e.target.value)
                          }
                          value={formDetails.phone2 || ""}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="nic2"
                          id="nic2"
                          placeholder="Player 2 NIC Number"
                          onChange={(e) => onFormUpdate("nic2", e.target.value)}
                          value={formDetails.nic2 || ""}
                          required
                          maxLength={20}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="email2"
                          id="email2"
                          placeholder="Player 2 Email"
                          onChange={(e) =>
                            onFormUpdate("email2", e.target.value)
                          }
                          value={formDetails.email2 || ""}
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
