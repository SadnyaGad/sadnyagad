import { Button, Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactMeSection = () => {
  const handleOpenURL = () => {
    window.open(
      "https://img1.wsimg.com/blobby/go/c2d42004-8296-4a70-9aaa-ea7e3f01228f/Wallace%20Dsouza%20(3).pdf",
      "_blank"
    );
  };

  return (
    <section
      className="contact-me-section"
      style={{
        backgroundColor: "black",
        color: "#FFFFFF",
        padding: "50px 0",
        margin: 0,
      }}
      
    >
      <Container>
        <h1 className="mb-4">Contact Me.</h1>
        <hr className="my-4" style={{ borderColor: "#ef233c" }} />
        <p className="mb-4">
          Feel free to reach out to me for any inquiries or just to say hi!
        </p>
        <Row className="contact-details">
          <Col md={6} lg={6}>
            <div className="mb-3">
              <p style={{ color: "#FFFFFF" }}>
                <FaEnvelope /> Email: Sadnyagad1@gmail.com
              </p>
            </div>
            <div className="mb-3">
              <p style={{ color: "#FFFFFF" }}>
                <FaLinkedin /> LinkedIn:{" "}
                <a
                  href="http://linkedin.com/in/sadnya-gad-4512a82a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  Sadnya Gad
                </a>
              </p>
            </div>
            <div>
              <p style={{ color: "#FFFFFF" }}>
                <FaInstagram /> Instagram:{" "}
                <a
                  href="https://www.instagram.com/sushe.gad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  sushe.gad
                </a>
              </p>
            </div>
          </Col>
          <Col md={6} lg={6} className="text-center mt-3 mt-md-0">
            <Button
              variant="dark"
              style={{
                borderRadius: 0,
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#ef233c",
                width: "100%",
              }}
              onClick={handleOpenURL}
            >
              Download Complete Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMeSection;
