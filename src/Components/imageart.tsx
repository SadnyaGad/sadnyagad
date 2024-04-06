import { Card, Col, Container, Row } from "react-bootstrap";
import image1 from "./IMAGES/EYE.jpg"; // Import your image files
import image2 from "./IMAGES/cant choose.jpg";
import image3 from "./IMAGES/notion 2.jpg";
import image4 from "./IMAGES/notion of heights.jpg";

const ImageArt = () => {
  const cardStyle: React.CSSProperties = {
    width: "100%", // Set width to 100%
    height: "200px", // Set fixed height
    backgroundColor: "black",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%", // Set width to 100%
    height: "100%", // Set height to 100%
    objectFit: "cover", // Cover the entire space
    borderRadius: "10px", // Add rounded corners
  };

  return (
    <>
      <Container style={{ paddingTop: "50px", paddingBottom: "50px"  }}>
        <Row className="align-items-center">
          <Col style={{margin: "15px"}}>
            <h2 style={{ color: "#ef233c" }}>
              Expressions in Art: A Visual Narrative of Creativity
            </h2>
            <p style={{ color: "white" }}>
              Discover the essence of creativity in my sample artwork
              collection. From vibrant abstracts to detailed portraits, each
              piece tells a unique story. Explore the interplay of color,
              texture, and form, inviting contemplation and connection with the
              human experience. Immerse yourself in a world of imagination and
              inspiration.
            </p>
          </Col>
        </Row>
        <Row className="mt-4" >
          <Col md={6} className="mb-4">
            {" "}
            {/* For smaller screens, 2 columns */}
            <Row>
              <Col xs={6} className="mb-4">
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={image1} style={imageStyle} />
                </Card>
              </Col>
              <Col xs={6} className="mb-4">
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={image2} style={imageStyle} />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} className="mb-4">
            {" "}
            {/* For smaller screens, 2 columns */}
            <Row>
              <Col xs={6} className="mb-4">
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={image3} style={imageStyle} />
                </Card>
              </Col>
              <Col xs={6} className="mb-4">
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={image4} style={imageStyle} />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImageArt;
