import { Col, Container, Row } from "react-bootstrap";
import WorkExperience from "./workexp";

function About() {
  const aboutStyle = {
    backgroundColor: "black",
    // borderRadius: "5px",
    paddingTop: "30px",
    paddingBottom: "30px",
    margin: "15px",
    // boxShadow: "0px 0px 15px -1px #EF2D56",
    color: "white",
  };

  return (
    <>
      <div style={aboutStyle}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={16} md={12}>
              <h2 className="display-0">Hi i am Sadnya :)</h2>
              <p className="lead">
                A passionate entrepreneur hailing from Bangalore, India. With a
                background in both art and psychology, I navigate the
                intersection of creativity and human behavior with fervor. As an
                artist, I express myself through various mediums, exploring
                emotions and narratives that resonate with my audience. My
                journey in psychology fuels my understanding of the human mind,
                enriching my artistic endeavors with depth and insight. Driven
                by a relentless entrepreneurial spirit, I strive to create
                meaningful impact through my ventures. Whether it's leveraging
                art therapy for mental well-being or integrating artistic
                elements into innovative business solutions, I'm committed to
                fostering positive change. With a blend of artistic sensitivity
                and psychological acumen, I embark on endeavors that not only
                inspire but also uplift and empower individuals and communities.
              </p>
              <p className="lead">
                Join me on this journey as I navigate the realms of
                entrepreneurship, art, and psychology, constantly seeking new
                challenges and opportunities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div style={{ height: "30px" }}></div>
      <ImageArt></ImageArt>
      <div style={{ height: "30px" }}></div> */}

      <div>
        <WorkExperience></WorkExperience>
      </div>
    </>
  );
}
export default About;
