import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import "./Travelquote.css";

const Travelquote = () => {
  return (
    <div className="travelquote">
      <FrameComponent4 />
      <section className="travelquote-inner">
        <div className="footer-info-parent">
          <div className="footer-info">
            <div className="logo-footer">
              <h1 className="request-travel-proposal">
                request travel proposal
              </h1>
            </div>
            <div className="indicates-required-field-container">
              <span className="i">*I</span>
              <span className="ndicates-required-field">
                ndicates required field
              </span>
            </div>
          </div>
          <div className="travel-information-wrapper">
            <h2 className="travel-information4">Travel information</h2>
          </div>
          <div className="frame-parent17">
            <div className="terms-and-conditions-link-parent">
              <div className="terms-and-conditions-link">
                <div className="choose-type-of-container">
                  <span className="c">c</span>
                  <span className="hoose-type-of">hoose type of trip *</span>
                </div>
                <img
                  className="selectinput-3-icon"
                  loading="lazy"
                  alt=""
                  src="/selectinput-3.svg"
                />
              </div>
              <div className="travel-information-tab">
                <div className="budget-per-personexcluding">
                  Budget per person(excluding international flights) *
                </div>
                <img
                  className="selectinput-2-icon"
                  loading="lazy"
                  alt=""
                  src="/selectinput-3.svg"
                />
              </div>
              <div className="travel-information-container">
                <h2 className="travel-information5">Travel information</h2>
                <div className="frame-wrapper6">
                  <div className="frame-parent18">
                    <div className="number-of-adults-parent">
                      <div className="number-of-adults">Number of Adults *</div>
                      <img
                        className="frame-child12"
                        loading="lazy"
                        alt=""
                        src="/group-21.svg"
                      />
                    </div>
                    <div className="number-of-children-parent">
                      <div className="number-of-children">
                        number of children *
                      </div>
                      <img
                        className="frame-child13"
                        loading="lazy"
                        alt=""
                        src="/group-21.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper7">
              <div className="terms-and-conditions-link-group">
                <div className="terms-and-conditions-link1">
                  <div className="choose-type-of-container1">
                    <span className="c1">c</span>
                    <span className="hoose-type-of1">hoose type of trip *</span>
                  </div>
                  <img
                    className="selectinput-1-icon"
                    loading="lazy"
                    alt=""
                    src="/selectinput-3.svg"
                  />
                </div>
                <div className="terms-and-conditions-link2">
                  <div className="estimated-arrival-date">
                    Estimated Arrival Date *
                  </div>
                  <img
                    className="calenderinput-icon"
                    alt=""
                    src="/calenderinput.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent3 />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Travelquote;
