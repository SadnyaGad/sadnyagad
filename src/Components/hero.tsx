import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface BallPosition {
  x: number;
  y: number;
}

function HeroSection() {
  const [ballPosition, setBallPosition] = useState<BallPosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setBallPosition({
      x: e.clientX - 5,
      y: e.clientY - 5,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const contentStyle = {
    // backgroundColor: "rgba(0, 0, 0, 0.0)",
    borderRadius: "10px",
    color: "black",
    padding: "50px",
    // boxShadow: "0px 0px 25px -5px rgba(255,255,255,0.20)",
  };

  const heroStyles = `
    .hero-section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #000000;
      color: black;
      position: relative;
      overflow: hidden;
    }

    .animated-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: whitesmoke;
      opacity: 0;
      animation: backgroundAnimation 10s infinite linear;
    }

    @keyframes backgroundAnimation {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    .ball {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      position: absolute;
      top: ${ballPosition.y}px;
      left: ${ballPosition.x}px;
      transition: top 2s ease, left 2s ease;
      background: #ef233c;
box-shadow:
  0 0 20px #ff77ff, /* Pink */
  0 0 40px #ff77ff, /* Pink */
  0 0 60px #ff77ff, /* Pink */
  0 0 80px #ff77ff, /* Pink */
  0 0 100px #ff77ff, /* Pink */
  0 0 120px #ff77ff, /* Pink */
  0 0 140px #ff77ff, /* Pink */
  0 0 160px #ff77ff, /* Pink */
  0 0 180px #ff77ff, /* Pink */
  0 0 200px #ff77ff; /* Pink */
    }

    @media (max-width: 768px) {
      .ball {
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 576px) {
      .ball {
        width: 10px;
        height: 10px;
      }

      .animated-background {
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero-section">
        <div className="animated-background" />
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} style={contentStyle}>
              <h1 className="display-1" style={{ color: "#ffffff" }}>
                Sadnya Gad.
              </h1>
              {/* <hr className="mb-1" style={{ borderColor: "white" }} /> */}

              <p
                className=""
                style={{
                  fontSize: "1.0rem",
                  marginBottom: "20px",
                  marginTop: "20px",
                  color:"#ef233c"
                }}
              >
                Entrepreneur | Artist
              </p>
            </Col>
          </Row>
        </Container>
        <div className="ball" />
      </section>
    </>
  );
}

export default HeroSection;
