import { Container, Button } from "react-bootstrap";

const CTASection = () => {
  const gradientStyle = {
    background: "linear-gradient(0deg, #000000, #000000)",
    color: "white",
    padding: "60px 20px",
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const titleStyle = {
    letterSpacing: "-2px",
    fontWeight: "700",
  };

  const handleContactClick = () => {
    // Replace with your email address
    const email = "Sadnyagad1@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <section style={gradientStyle} className="">
      <Container>
        <h2 className="display-1 mb-4" style={titleStyle}>
          Own a One-of-a-Kind Creation. Let's Create Something Meaningful
          Together.
        </h2>
        <p className="lead mb-4">
          Contact me now and enjoy an additional 5% off.
        </p>
        <Button
          variant="dark"
          size="lg"
          style={{ color: "#ef233c" }}
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </Container>
    </section>
  );
};

export default CTASection;
