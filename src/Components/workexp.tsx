import { Button, Col, Container, Row } from "react-bootstrap";

function WorkExperience() {
  const handleCardHover = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1.01)";
  };

  const handleCardHoverOut = (e: {
    currentTarget: { style: { transform: string } };
  }) => {
    e.currentTarget.style.transform = "scale(1)";
  };



  const textStyle = {
    color: "white",
  };

  const generateContent = () => {
    const content = [
      {
        title: "Assistant Teacher at Art Academy",
        company: "",
        description:
          "During my tenure as an assistant teacher at an esteemed art academy, I honed interpersonal communication skills through engagement with diverse demographics. I adeptly managed crowd dynamics and developed resilience under pressure, navigating real-world scenarios with clients, parents, and students.",
        tags: [
          "Crowd Management",
          "Interpersonal Communication",
        ],
      },
      {
        title: "Art Exhibition Marketing/Management",
        company: "",
        description:
          "Participating in my first art exhibition, I collaborated with talented artists, honing problem-solving and teamwork skills. Working under pressure, I developed marketing and management abilities crucial for successful event execution.",
        tags: ["Management", "Team Work", "Marketing"],
      },
      {
        title: "Volunteer at Old Age Home",
        company: "",
        description:
          "Volunteering at an old age home provided insights into the psychological challenges of aging. Witnessing resilience amidst adversity deepened my understanding of lifespan psychology, emphasizing empathy and adaptability.",
        tags: ["Empathy", "Adaptability", "Lifespan Psychology"],
      },
      {
        title: "Digital Art for Small Businesses",
        company: "",
        description:
          "Engaging in digital art for small businesses enhanced design skills and demonstrated adaptability to client needs. Tailoring designs to brand identities showcased effective communication and consumer-centric design understanding.",
        tags: ["Graphic Design", "Brand Communication", "Consumer Psychology"],
      },
    ];

    return content.map((experience, index) => (
      <Col md={6} className="mb-4" key={index}>
        <div
          style={{
            backgroundColor: "#ef233c",
            boxShadow: "0px 0px 1.5px 0px #355E93",

            borderRadius: "10px",
            padding: "30px",
            transition: "transform 0.1s ease-out",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          onMouseOver={handleCardHover}
          onMouseOut={handleCardHoverOut}
        >
          <h2 style={textStyle}>{experience.title}</h2>
          <h5 style={textStyle}>{experience.company}</h5>
          <hr
            style={{
              height: "1px",
              backgroundColor: "black",
              border: "none",
            }}
          />

          <p style={textStyle}>{experience.description}</p>
          <div style={{ marginTop: "auto" }}>
            <Row>
              {experience.tags.map((tag, tagIndex) => (
                <Button
                  key={tagIndex}
                  variant="dark"
                  style={{
                    borderRadius: 50,
                    width: "auto",
                    fontSize: 10,
                    color: "white",
                    margin: 10,
                  }}
                >
                  {tag}
                </Button>
              ))}
            </Row>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <Container>
      <Row>{generateContent()}</Row>
    </Container>
  );
}

export default WorkExperience;
