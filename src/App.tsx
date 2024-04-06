import CTASection from "./Components/CTA";
import About from "./Components/abt";
import ContactMeSection from "./Components/foot2";
import HeroSection from "./Components/hero";
import ImageArt from "./Components/imageart";
import MadeByWallace from "./Components/madeby";

function App() {
  return (
    <>
      <MadeByWallace></MadeByWallace>
      <div style={{ backgroundColor: "black" }}>
        <HeroSection></HeroSection>

        <About></About>

        <CTASection></CTASection>
        <div style={{ height: 0 }}></div>
        <ImageArt></ImageArt>
        <div style={{ height: 0 }}></div>
      </div>
      <footer>
        <ContactMeSection></ContactMeSection>
      </footer>
    </>
  );
}

export default App;
