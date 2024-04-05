import NavBar from "../components/NavBar";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterFrame from "../components/FooterFrame";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <NavBar />
      <section className="about-inner">
        <div className="backgroundimage3-parent">
          <img
            className="backgroundimage3-icon"
            alt=""
            src="/backgroundimage3@2x.png"
          />
          <h1 className="about1">About</h1>
        </div>
      </section>
      <FrameComponent2 />
      <section className="logo-isles-savannah-wrapper">
        <div className="logo-isles-savannah">
          <div className="our-safaris-arent-your-averag-wrapper">
            <h3 className="our-safaris-arent-container">
              <p className="our-safaris-arent">
                Our safaris aren't your average sightseeing tours; they're
                up-close encounters with iconic wildlife
              </p>
              <p className="and-breathtaking-landmarks">
                and breathtaking landmarks! Get ready for game drives that take
                you through Serengeti National
              </p>
              <p className="park-the-ngorongoro">
                Park, the Ngorongoro Crater, and other world-famous wildlife
                reserves.
              </p>
              <p className="fancy-tracking-chimpanzees">
                Fancy tracking chimpanzees? We've got you covered in Gombe
                Stream National Park.
              </p>
              <p className="how-about-a">
                How about a walking safari in Tarangire National Park? Join us
                on our 7-day tour of the Park
              </p>
            </h3>
          </div>
          <div className="logo-isles-savannah-inner">
            <div className="aboutimage-7-parent">
              <img
                className="aboutimage-7-icon"
                loading="lazy"
                alt=""
                src="/aboutimage-7@2x.png"
              />
              <img
                className="aboutimage-2-icon"
                loading="lazy"
                alt=""
                src="/aboutimage-2@2x.png"
              />
            </div>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
      <FooterFrame />
    </div>
  );
};

export default About;
