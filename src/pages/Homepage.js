import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import HomepageBanner from "../components/HomepageBanner";
import SecondSection from "../components/SecondSection";
import CarouselContainer from "../components/CarouselContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  const onRequestATourQuoteClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="homepage">
      <NavBar2
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactText1Click={onContactText1Click}
        onCTAButtonClick={onCTAButtonClick}
      />
      <img className="homepage-child" alt="" src="/ellipse-1@2x.png" />
      <HomepageBanner />
      <SecondSection />
      <CarouselContainer />
      <TestimonialContainer />
      <section className="bookinglinkcontainer">
        <button
          className="request-a-tour-quote"
          onClick={onRequestATourQuoteClick}
        >
          <div className="request-a-quote1">request a quote</div>
        </button>
      </section>
      <footer className="footer1">
        <div className="frame-parent19">
          <div className="logo-wrapper">
            <img
              className="logo-icon1"
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
          </div>
          <div className="frame-parent20">
            <div className="frame-parent21">
              <div className="travel-advice-parent">
                <div className="travel-advice2">
                  <img
                    className="call-undefined-glyph-unde1"
                    loading="lazy"
                    alt=""
                    src="/call--undefined--glyph-undefined.svg"
                  />
                </div>
                <div className="div1">+255 757 738 345</div>
              </div>
              <div className="isles-savannah-container">
                <div className="isles-savannah1">{`© 2024 Isles & Savannah.`}</div>
              </div>
            </div>
            <div className="frame-wrapper8">
              <div className="terms-and-condition-parent">
                <div className="terms-and-condition1">Terms and Condition</div>
                <div className="privacy-policy2">Privacy Policy</div>
                <div className="contact3">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-inner1">
          <div className="frame-parent22">
            <div className="travel-information-parent1">
              <div className="travel-information6">
                <p className="travel-information7">TRAVEL INFORMATION</p>
              </div>
              <div className="travel-advice-yellow-container2">
                <p className="travel-advice3">Travel Advice</p>
                <p className="yellow-fever-requirements2">
                  Yellow fever requirements
                </p>
                <p className="tanzania-weather2">Tanzania weather</p>
                <p className="when-to-visit2">When to visit Tanzania?</p>
                <p className="flying-doctors-services2">
                  Flying Doctors Services
                </p>
              </div>
            </div>
            <div className="travel-information-parent2">
              <div className="travel-information8">
                <p className="travel-information9">TRAVEL INFORMATION</p>
              </div>
              <div className="travel-advice-yellow-container3">
                <p className="travel-advice4">Travel Advice</p>
                <p className="yellow-fever-requirements3">
                  Yellow fever requirements
                </p>
                <p className="tanzania-weather3">Tanzania weather</p>
                <p className="when-to-visit3">When to visit Tanzania?</p>
                <p className="flying-doctors-services3">
                  Flying Doctors Services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-inner2">
          <div className="progress-bar-parent">
            <div className="progress-bar">
              <div className="sign-up-for1">sign up for our waitlist</div>
              <form className="mailing-list-signup">
                <div className="receive-travel-ideas-destinat-group">
                  <div className="receive-travel-ideas1">
                    Receive travel ideas, destination guides, and inspiration
                    directly in your inbox
                  </div>
                  <div className="frame-parent23">
                    <div className="rectangle-parent3">
                      <div className="frame-child14" />
                      <input
                        className="your-name1"
                        placeholder="your name"
                        type="text"
                      />
                    </div>
                    <div className="rectangle-parent4">
                      <div className="frame-child15" />
                      <input
                        className="your-email1"
                        placeholder="your Email"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="image-gallery">
                  <div className="perperson">
                    <div className="by-signing-up-container1">
                      By signing up for our mailing list, you agree to our 
                      <span className="privacy-policy3">privacy policy</span>
                    </div>
                  </div>
                  <button className="sign-up-container">
                    <div className="sign-up1">Sign up</div>
                  </button>
                </div>
              </form>
            </div>
            <div className="columns">
              <img
                className="columns-child"
                loading="lazy"
                alt=""
                src="/group-12.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
